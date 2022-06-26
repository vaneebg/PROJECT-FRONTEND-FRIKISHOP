import { useContext, useEffect,useState } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import { ReviewsContext } from "../../context/ReviewsContext/ReviewsState";
import { Link,useNavigate } from 'react-router-dom'

import './Products.scss'
const Products = () => {
  const { products, getProducts, addCart, addFavs,deleteProduct,filterProduct,filterProductName} = useContext(ProductsContext);
  const { reviews,createReviews } = useContext(ReviewsContext)

  const token = JSON.parse(localStorage.getItem('token'))
  const role = JSON.parse(localStorage.getItem('role'))

  const navigate = useNavigate()
  
  const toReviews = (product) =>{
    navigate('/createReviews')
    createReviews(product)
    console.log('product',product)
    console.log(reviews)
  }

  useEffect(() => {
    getProducts();
  }, []);

  const [valor,setValor] = useState(40)

  const handleChange=(event)=>{
    setValor(event.target.value)
    filterProduct(valor)
  }

  const [name,setName] = useState('')


  const handleInputChange=(event)=>{
    setName(event.target.value)
  }
  const handleSubmit=(event)=>{
    event.preventDefault()
    filterProductName(name)
    console.log(name)
  }


    if (products.length <= 0) {
    return <span>Cargando...</span>;
  }  
  
  
  const listProducts=products.map((product,i)=>{return(
    
  <div className='product' key={i}>
  <h2>{product.name}</h2> 
  <div className='content'>
    <div className="text">
  <span>Descripción: {product.description}</span><br/>
  <span>Precio: {product.price}€</span><br/>
  <span>Stock: {product.stock}</span><br/></div>
  {product.img ?<img src={"http://localhost:8080/images/products/"+product.img}/> : <img src="http://localhost:8080/images/products/int.jpg"/> }
  </div>
  <div className="button">
  {token && role==='user'? <> <button onClick={() => addCart(product)}>Añadir a carrito</button>
  <button onClick={() => addFavs(product)}>Añadir favorito</button> <button onClick={()=>toReviews(product)}>Comentar</button>
  </>
  : null}
  { role==='SuperAdmin' ? <><button><Link to={'/products/id/' + product.id}>Editar producto</Link> </button>
    <button onClick={() => deleteProduct(product.id)}>Borrar producto</button></> :null}</div></div>
  )}
  )

    return (
     
    <>
        <span className='title'> Productos</span>
        <form action="" className='containerProducts'>
        <input
          type="range" 
          className="rangeInput" 
          size="5rem"
          min="4" 
          max="40" 
          onChange={handleChange} 
          />
          <span className="inputText">El rango de precio:{valor} €</span>
        </form>
        <form action="" className='containerProducts' onSubmit={handleSubmit}>
        <input
          type="text" 
          size="5rem"
          onChange={handleInputChange}
          />
          <button type="submit">Buscar</button>
        </form>
        <div className='containerProducts'>
          {listProducts}
          {products.name} 
        </div>
    </>
    );
};

export default Products;

