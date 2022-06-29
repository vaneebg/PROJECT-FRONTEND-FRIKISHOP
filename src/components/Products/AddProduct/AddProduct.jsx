import { useContext, useEffect } from "react";
import { ProductsContext } from "../../../context/ProductsContext/ProductsState";
import './AddProduct.scss'
import { Form, Input, Button, InputNumber, notification } from 'antd';
import { useNavigate } from "react-router-dom";



const AddProduct = () => {
  const navigate = useNavigate()

  const { addProduct, message } = useContext(ProductsContext);

  const onFinish = (values) => {

    addProduct(values)
    setTimeout(() => {
      navigate("/products")
    }, 2000)
    return notification.success({
      message: "Yuju!",
      description: "Producto añadido!",
    });

  };

  const onFinishFailed = (errorInfo) => {
    console.error("Failed:", errorInfo);
    return notification.error({
      message: "Meec",
      description: "No ha ido bien...",
    });
  };
  return (
    <div className="center">
      <div className="container">
        <h2>Crear producto</h2>
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
                Añadir producto
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}


export default AddProduct;