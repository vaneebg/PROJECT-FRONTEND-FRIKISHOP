import { useState, useContext } from "react";
import { ProductsContext } from "../../../context/ProductsContext/ProductsState";
import './AddProduct.scss'
import { Form, Input, Button, InputNumber, notification } from 'antd';


const AddProduct = () => {

  const { addProduct } = useContext(ProductsContext);

 
  const onFinish = (values) => {  
    addProduct(values)
    return notification.success({
      message: "Yuju!",
      description: "Producto añadido!",
    });
   
  };
 
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="container">
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
              label="Name"
              name="name"
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Description"
              name="description"
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Price"
              name="price"
            defaultValue={3}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item
              label="Stock"
              name="stock"
            >
              <InputNumber />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                    Crear producto
              </Button>
            </Form.Item>
          </Form>
      
    </div>
  );
};

export default AddProduct;