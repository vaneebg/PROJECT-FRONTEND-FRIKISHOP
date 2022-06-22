import { useState, useContext } from "react";
import { ProductsContext } from "../../../context/ProductsContext/ProductsState";
import './AddProduct.scss'

const AddProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const { addProduct } = useContext(ProductsContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct({  name,description,price,stock });
  };

  return (
    <div className="container">
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre del producto: </label>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        name="name"
      /><br/>
       <label htmlFor="description">Descripción: </label>
       <input
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        name="description"
      /><br/>
       <label htmlFor="price">Precio: </label>
        <input
          type="number"
          onChange={(e) => setPrice(e.target.value)}
          name="price"
        /><br/>
         <label htmlFor="stock">Stock: </label>
      <input
        type="number"
        onChange={(e) => setStock(e.target.value)}
        name="stock"
      /><br/>
      <button type="submit">Añadir producto</button>
    </form>
    </div>
  );
};

export default AddProduct;