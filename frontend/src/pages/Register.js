import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import useClass from '../hooks/add-class-body';
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

const Register = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useClass('bg-blue');
    const handleCreate = async () => {
        const data = {
            name,
            email,
            password,
        }

        api.post('/users', data).then(() => window.location.href = '/');
    }

    return(
        <div className="login mt-5 flex-row align-items-center">
            <Container>
                <Row className="justify-content-center">
                    <Col md="8">
                        <Card>
                            <CardBody>
                                <Form>
                                    <h1>Criar Nova Conta</h1>
                                    <p>Digite seu nome, email e senha para criar uma nova conta. Já possui uma conta? <Link to="/">Login</Link></p>
                                    <hr />
                                    <InputGroup className="mb-3">
                                        <Input type="text" id="name" placeholder="Name" onChange={
                                            () => setName(document.getElementById('name').value)
                                        }/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Input type="email" id="email" placeholder="E-mail" onChange={
                                            () => setEmail(document.getElementById('email').value)
                                        }/>
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <Input type="password" id="password" placeholder="Password" onChange={
                                            () => setPassword(document.getElementById('password').value)
                                        }/>
                                    </InputGroup>
                                    <InputGroup>
                                        <Button onClick={handleCreate} outline color="primary">Cadastrar</Button>
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

export default Register;