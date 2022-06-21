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
  <div className='content'>
  <span>Descripción: {product.description}<br/>
  Precio: {product.price}€<br/>
  Stock: {product.stock}</span><br/>
  <img src={"http://localhost:8080/images/products/"+product.img}/></div>
  <button onClick={() => addCart(product)}>Añadir a carrito</button></div>)})


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