import { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { Form, Input, Button , notification} from 'antd';
import { useNavigate } from "react-router-dom";
import {  UserOutlined,MailOutlined,LockOutlined, AuditOutlined} from '@ant-design/icons';
import './Register.scss'


function Register() {
    const { clearMessage, register, message } = useContext(UserContext);
    const navigate = useNavigate()
    const onFinish = (values) => { 
      register(values)
      setTimeout(() => {
          navigate("/")
          clearMessage()
      },3000)
      return notification.success({
        message: "Nuevo nakama!",
        description: "Usuario creado con éxito!",
      });
    };
   
    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };
    return (
      <div className="center">
        <div className="containerR">
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 29 }}
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
              <Input prefix={<UserOutlined className="site-form-item-icon" />} />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Introduce un email!" }]}
            >
              <Input prefix={<MailOutlined className="site-form-item-icon" />}/>
            </Form.Item>
            <Form.Item
              label="Adress"
              name="adress"
              rules={[{ required: true, message: "Introduce una dirección" }]}
            >
              <Input prefix={<AuditOutlined className="site-form-item-icon" />}/>
            </Form.Item>
    
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: "Introduce una contraseña!" }]}
            >
              <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} />
            </Form.Item>
            {message}   
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                    Registrarse
              </Button>
            </Form.Item>
          </Form>
        </div>
        </div>
      );
}

export default Register