import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProductsContext } from "../../../context/ProductsContext/ProductsState";
import { Form, Input, Button, InputNumber, notification } from 'antd';

const EditProduct = () => {
  const { product, getProduct, editProduct } = useContext(ProductsContext);
  const [data, setData] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getProduct(id);
    console.log('id del producto',id)
  }, []);

  useEffect(() => {
    setData(data);
  }, [data]);

  const onFinish = (values) =>{
    console.log('valores',values)
    editProduct(product.id,values)
    return notification.success({
        message: "Bieeen!",
        description: "Producto cambiado!",
      });
    
}

const onFinishFailed = (errorInfo) => {
    console.log('Failed:',errorInfo)
}

  return (
    <div className="center">
        
    <div className="container">
    <h2>Modificar producto</h2>
    <Form name="basic" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off" >
            <Form.Item label="Nombre producto" name="name" > <Input /> </Form.Item>
            <Form.Item label="Descripción"  name="description" > <Input /> </Form.Item>
            <Form.Item label="Precio" name="price" defaultValue={3}> <InputNumber /> </Form.Item>
            <Form.Item label="Stock" name="stock"> <InputNumber /> </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
             <Button type="primary" htmlType="submit"> Modificar producto </Button> </Form.Item>
     </Form>
        </div>
        </div>
  )
}
export default EditProduct;