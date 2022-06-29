import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import { Link } from 'react-router-dom'
import { Button, Modal } from 'antd';
import { ReviewsContext } from "../../context/ReviewsContext/ReviewsState";

import './Products.scss'
import Reviews from "../Reviews/Reviews";


const Products = () => {
  const { products, getProducts, favs, addCart, addFavs, deleteProduct, filterProduct, filterProductName } = useContext(ProductsContext);
  const { getReview } = useContext(ReviewsContext)

  const token = JSON.parse(localStorage.getItem('token'))
  const role = JSON.parse(localStorage.getItem('role'))



  useEffect(() => {
    getProducts();
  }, []);

  const [modal2Visible, setModal2Visible] = useState(false);
  const [valor, setValor] = useState(40)
  const [name, setName] = useState('')

  const handleChange = (event) => {
    setValor(event.target.value)
    filterProduct(valor)
  }

  const handleInputChange = (event) => {
    setName(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    filterProductName(name)
    getProducts()
  }

  const modalButton = (value) => {
    setModal2Visible(true)
    getReview(value)
  }

  if (products.length <= 0) {
    return <span>Cargando...</span>;
  }

  const listProducts = products.map((product, i) => {
    return (
      <div className='product' key={i}>
        <h2>{product.name}</h2>
        <div className='content' >
          <div className="text" key={i}>
            <span>Descripción: {product.description}</span><br />
            <span className='bolder'>Precio: {product.price}€</span><br />
            <span>Stock: {product.stock} ud.</span><br /></div>
          {product.img ? <img src={"http://localhost:8080/images/products/" + product.img} /> : <img src="http://localhost:8080/images/products/int.jpg" />}
        </div>

        <div className="buttonCont" key={i}>
          {token && role === 'user' ? <> <div className='together'> <button className='btnss' onClick={() => addCart(product)}>Añadir a carrito</button>
            {favs.map((f) => f.id).includes(product.id) ? null : <button className='btnss' onClick={() => addFavs(product)}>Añadir favorito</button>
            }
          </div>
            <div className="reviews">
              <Button className='btnssRev' type="primary" onClick={() => modalButton(product.id)}>
                Reviews
              </Button>
              <Modal
                title="Reviews producto"
                centered
                maskClosable
                footer={null}
                width={800}
                visible={modal2Visible}
                onOk={() => setModal2Visible(false)}
                onCancel={() => setModal2Visible(false)}
              >
                <Reviews />
              </Modal>
            </div>
          </>

            : null}
          {role === 'SuperAdmin' ? <div className="buttonCont" key={i}>
            <div className='together'>
              <button className='btnsadmin'><Link to={'/products/id/' + product.id}>Editar producto</Link> </button>
              <button className='btnsadmin' onClick={() => deleteProduct(product.id)}>Borrar producto</button></div>
            <div className="reviews">
              <Button className='btnssRev' type="primary" onClick={() => modalButton(product.id)}>
                Reviews
              </Button>
              <Modal
                title="Reviews producto"
                centered
                visible={modal2Visible}
                onOk={() => setModal2Visible(false)}
                onCancel={() => setModal2Visible(false)}
              >
                <Reviews />
              </Modal>
            </div>
          </div> : null}
        </div></div>
    )
  }
  )

  return (
    <>
      <div className='title'>
        <div className="range">
          <span className="inputText">Rango de precio: {valor} €</span><br />
          <input
            type="range"
            className="rangeInput"
            size="5rem"
            min="4"
            max="40"
            onChange={handleChange}
          />
        </div>

        <span className="textTitle">Filtros búsqueda</span>

        <div className="search">
          <form action="" onSubmit={handleSubmit}>
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

