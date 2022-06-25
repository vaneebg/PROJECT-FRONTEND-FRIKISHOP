import { useContext, useEffect,useState } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import { Link } from 'react-router-dom'
import { Button, Dropdown, Menu } from 'antd';

import './Products.scss'

const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <button>
            Filtrar por nombre
          </button>
        ),
      },
      {
        key: '2',
        label: (
          <button>
            Filtrar por precio
          </button>
        ),
      },
    ]}
  />
);



const Products = () => {
  const { products, getProducts, addCart, addFavs,deleteProduct,filterProduct,filterProductName} = useContext(ProductsContext);

  const token = JSON.parse(localStorage.getItem('token'))
  const role = JSON.parse(localStorage.getItem('role'))

  
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
  <button onClick={() => addFavs(product)}>Añadir favorito</button> 
  </>
  : null}
  { role==='SuperAdmin' ? <><button><Link to={'/products/id/' + product.id}>Editar producto</Link> </button>
    <button onClick={() => deleteProduct(product.id)}>Borrar producto</button></> :null}</div></div>
  )}
  )

    return (
     
    <>
        <span className='title'> Productos
        <Dropdown overlay={menu} placement="bottom" arrow>
      <Button className='filter'>Filtro de búsqueda</Button>
    </Dropdown>
        </span>
        <div className="filters">
        <div className="range">
        <span className="inputText">Rango de precio: {valor} €</span>

        <input
          type="range" 
          className="rangeInput" 
          size="5rem"
          min="4" 
          max="40" 
          onChange={handleChange} 
          />
        
      
        </div>
        <div className="search">
        <form action="" className='containerProducts' onSubmit={handleSubmit}>
        <input
          type="text" 
         className="inputSearch"
         placeholder="Nombre producto..."
          onChange={handleInputChange}
          />
          <button className='btnsearch' type="submit">Buscar</button>
        </form>
      </div>
      </div>
        <div className='containerProducts'>
          {listProducts}
          {products.name} 
        </div>
    </>
    );
};

export default Products;

