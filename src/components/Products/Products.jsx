import { useContext, useEffect } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";

const Products = () => {
  const { products, getProducts} = useContext(ProductsContext);
  
  useEffect(() => {
    getProducts();
  }, []);

    if (products.length <= 0) {
    return <span>Cargando...</span>;
  }
  
  const listProducts=products.map(product=>{return(<><h2>{product.name}</h2> <span>Descripción:{product.description}</span><br/><span>Precio:{product.price}</span><br/><span>Stock:{product.stock}</span>
  <img src={"http://localhost:8080/images/products/"+product.img}/></>)})


    return (
      <div>
        <h1> Productos</h1>
        {listProducts}
        {products.name} 
      </div>
    );
};

export default Products;