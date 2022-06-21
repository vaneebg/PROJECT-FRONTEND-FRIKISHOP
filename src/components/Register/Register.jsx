import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { Form, Input, Button } from 'antd';
import { useNavigate } from "react-router-dom";


function Register() {
    console.log('holi')
    const { clearMessage, register, message } = useContext(UserContext);

    console.log(message)

    const navigate = useNavigate()

    const onFinish = (values) => {  
      register(values)
      setTimeout(() => {
          navigate("/")
          clearMessage()
      },3000)
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
              label="Username"
              name="username"
              rules={[{ required: true, message: "Introduce un username!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Introduce un email!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Adress"
              name="adress"
              rules={[{ required: true, message: "Introduce una dirección" }]}
            >
              <Input />
            </Form.Item>
    
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: "Introduce una contraseña!" }]}
            >
              <Input.Password />
            </Form.Item>

            {message}
    
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                    Registrarse
              </Button>
            </Form.Item>
          </Form>
        </div>
      );
}

export default Register