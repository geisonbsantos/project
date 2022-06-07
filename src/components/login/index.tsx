import { Col, Form, Input, Row, message } from "antd";
import { useAuth } from "../../context/AuthProvider/useAuth";
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const auth = useAuth()
    //const history = useHistory()
    const navigate = useNavigate();

    async function onFinish (values: {email: string, password: string}) {
        try {
            await auth.authenticate(values.email, values.password);

            navigate("/profile");
        } catch (error) {
            message.error("E-mail ou Senha inválida!")
        }
    }

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <Col span={12}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
        >
          <Form.Item label="E-mail" name="email">
            <Input />
          </Form.Item>
          <Form.Item label="Senha" name="password">
            <Input.Password />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <button type="submit">Sing In</button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};
