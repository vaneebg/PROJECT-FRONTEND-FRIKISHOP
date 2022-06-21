import { useContext, useEffect } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";

const Products = () => {
<<<<<<< HEAD
  const { products, getProducts} = useContext(ProductsContext);
  
=======
  const { products, getProducts,addCart, cart} = useContext(ProductsContext);
>>>>>>> vane
  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

    if (products.length <= 0) {
    return <span>Cargando...</span>;
  }
  
<<<<<<< HEAD
  const listProducts=products.map(product=>{return(<><h2>{product.name}</h2> <span>Descripción:{product.description}</span><br/><span>Precio:{product.price}</span><br/><span>Stock:{product.stock}</span>
  <img src={"http://localhost:8080/images/products/"+product.img}/></>)})
=======
  const listProducts=products.map(product=>{return(<>
  <h2>{product.name}</h2> 
  <span>Descripción:{product.description}</span><br/>
  <span>Precio:{product.price}</span><br/>
  <span>Stock:{product.stock}</span>
  <img src={"http://localhost:8080/images/products/"+product.img}/>
  <button onClick={() => addCart(product)}>Añadir al carrito</button>
  </>)})
>>>>>>> vane


    return (
      <div>
        <h1> Productos</h1>
        {listProducts}
        {products.name} 
      </div>
    );
};

export default Products;