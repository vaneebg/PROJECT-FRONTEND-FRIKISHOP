import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProductsContext } from "../../../context/ProductsContext/ProductsState";
import { Form, Input, Button, InputNumber, notification } from 'antd';

const EditProduct = () => {
  const { product, getProduct, editProduct,message } = useContext(ProductsContext);
  const [data, setData] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getProduct(id);
  }, []);

  useEffect(() => {
    setData(data);
  }, [data]);

  const onFinish = (values) =>{
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
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
        <Form.Item
        label="Nombre"
        name="name"
        rules={[{ required: true, message: "Introduce un nombre de producto!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Descripción"
        name="description"
        rules={[{ required: true, message: "Introduce una descripción" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Stock"
        name="stock"
        rules={[{ required: true, message: "Introduce un stock" }]}
      >
        <InputNumber />
      </Form.Item>

      <Form.Item
        label="Precio"
        name="price"
        rules={[{ required: true, message: "Introduce su precio" }]}
      >
        <InputNumber />
      </Form.Item>
      {message}   
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <div className='containerbut'>
        <Button className='button' htmlType="submit">
              Modificar producto
        </Button>
        </div>
      </Form.Item>
    </Form>
  </div>
  </div>
);
}
export default EditProduct;