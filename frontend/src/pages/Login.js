import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useClass from '../hooks/add-class-body';
import api from '../services/api';
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Form,
    InputGroup,
    Input,
    Button
} from 'reactstrap';

const Login = (props) => {
    useClass('bg-blue');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        const data = {
            email,
            password,
        }

        api.post('/users/session', data).then((response) => {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('id', response.data.id)
            window.location.href = '/dashboard';
        }).catch((error) => {
            alert('Usuário ou senha inválido.');
            window.location.reload();
        })

    }

    return(
        <div className="login mt-5 flex-row align-items-center">
            <Container>
                <Row className="justify-content-center">
                    <Col md="8">
                        <Card>
                            <CardBody>
                                <Form>
                                    <h1>Login</h1>
                                    <p>Digite seu email e senha para acessar sua conta. Novo? <Link to="/register">Registre-se!</Link></p>
                                    <hr />
                                    <InputGroup className="mb-3">
                                        <Input type="email" id="email" placeholder="E-mail" onChange={
                                            () => setEmail(document.getElementById('email').value)
                                        } />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Input type="password" id="password" placeholder="Password" onChange={
                                            () => setPassword(document.getElementById('password').value)
                                        } />
                                    </InputGroup>
                                    <InputGroup>
                                        <Button onClick={handleLogin} outline color="primary">Login</Button>
                                    </InputGroup>
                                </Form>
                            </CardBody>                                
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Login;