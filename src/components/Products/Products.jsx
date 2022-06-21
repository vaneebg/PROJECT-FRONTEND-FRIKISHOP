import { useContext, useEffect } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import './Products.scss'
const Products = () => {
  const { products, getProducts, addCart} = useContext(ProductsContext);

  const token = JSON.parse(localStorage.getItem('token'))
  
  useEffect(() => {
    getProducts();
  }, []);

    if (products.length <= 0) {
    return <span>Cargando...</span>;
  }
  
  const listProducts=products.map(product=>{return(<div className='product'>
  <h2>{product.name}</h2> 
<<<<<<< HEAD
  <div className='content'>
  <span>Descripción: {product.description}<br/>
  Precio: {product.price}€<br/>
  Stock: {product.stock}</span><br/>
  <img src={"http://localhost:8080/images/products/"+product.img}/></div>
  <button onClick={() => addCart(product)}>Añadir a carrito</button></div>)})
=======
  <span>Descripción:{product.description}</span><br/>
  <span>Precio:{product.price}</span><br/>
  <span>Stock:{product.stock}</span>
  <img src={"http://localhost:8080/images/products/"+product.img}/>
  {token?<button onClick={() => addCart(product)}>Añadir a carrito</button>:null}
  </>
  )
  })
>>>>>>> 889fdc09ec5fb5225b09e8979539b7ef48ff27c0


    return (
    <>
        <h1> Productos</h1>
        <div className='containerProducts'>
        {listProducts}
        {products.name} 
      </div>
      </>
    );
};

export default Products;