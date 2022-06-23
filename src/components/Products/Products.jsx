import { useContext, useEffect } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import './Products.scss'
const Products = () => {
  const { products, getProducts, addCart, addFavs} = useContext(ProductsContext);

  const token = JSON.parse(localStorage.getItem('token'))
  
  useEffect(() => {
    getProducts();
  }, []);

  const valorRange=(value)=>{
    console.log(value)
  }


    if (products.length <= 0) {
    return <span>Cargando...</span>;
  }
  
  const listProducts=products.map((product,i)=>{return(
    <div>
      <div className='product' key={i}>
      <div>
      <input 
      type="range" 
      className="custom-range" 
      min="0" 
      max="3999" 
      onChange={(event) => valorRange(event.target.value)} />
      <h4>The range value is {}</h4>
    </div>
  <h2>{product.name}</h2> 
  <div className='content'>
    <div className="text">
  <span>Descripción: {product.description}</span><br/>
  <span>Precio: {product.price}€</span><br/>
  <span>Stock: {product.stock}</span><br/></div>
  <img src={"http://localhost:8080/images/products/"+product.img}/></div>
  <div className="button">
  {token ? <> <button onClick={() => addCart(product)}>Añadir a carrito</button>
  <button onClick={() => addFavs(product)}>Añadir favorito</button> </>
  : null}</div></div>
    </div>
  
  )}
  )
  

    return (
    <>
        <span className='title'> Productos</span>
        <div className='containerProducts'>
        {listProducts}
        {products.name} 
      </div>
      </>
    );
};

export default Products;