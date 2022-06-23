import { useContext, useEffect } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import { Link } from 'react-router-dom'

import './Products.scss'
const Products = () => {
  const { products, getProducts, addCart, addFavs,deleteProduct} = useContext(ProductsContext);

  const token = JSON.parse(localStorage.getItem('token'))
  const role = JSON.parse(localStorage.getItem('role'))

  
  useEffect(() => {
    getProducts();
  }, []);

    if (products.length <= 0) {
    return <span>Cargando...</span>;
  }
  
  
  const listProducts=products.map((product,i)=>{return(<div className='product' key={i}>
  <h2>{product.name}</h2> 
  <div className='content'>
    <div className="text">
  <span>Descripción: {product.description}</span><br/>
  <span>Precio: {product.price}€</span><br/>
  <span>Stock: {product.stock}</span><br/></div>
  <img src={"http://localhost:8080/images/products/"+product.img}/></div>
  <div className="button">
  {token ? <> <button onClick={() => addCart(product)}>Añadir a carrito</button>
  <button onClick={() => addFavs(product)}>Añadir favorito</button> 
  </>
  : null}
  { role==='SuperAdmin' ? <><button><Link to={'/products/id/' + product.id}>Editar producto</Link> </button>
    <button onClick={() => deleteProduct(product.id)}>Borrar producto</button></> :null}</div></div>
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