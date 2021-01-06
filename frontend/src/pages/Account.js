import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import { config } from '../utils/auth';
import Header from './../components/Header';
import Sidebar from './../components/Sidebar';
import { Row, Col, Card, CardHeader, CardBody, Form, FormGroup, Label, Input } from 'reactstrap';


const Account = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const id = localStorage.getItem('id')

  useEffect(() => {  
    api.get(`/users/${id}`, config).then((response) => {
      setName(response.data.name);
      setEmail(response.data.email);
      setPassword(response.data.password);
    });
  }, [id]);

  const handleClick = async () => {
    const data = {
      name,
      email,
      password,
    }

    await api.put(`/users/${id}`, data, config);

    alert(`${name}, seus dados foram atualizados.`);

    window.location.href = '/';
  }

  return (
    <div className="d-flex" id="main-wrapper">
      <Sidebar />
      <div id="content-wrapper">
        <Header />

        <div className="content-dynamic">
          <Row>
              <Col xs="12" sm="12" md="12">
                  <Card>
                      <CardHeader>
                          <h4>Atualizar Conta</h4>
                      </CardHeader>
                      <CardBody>
                          <Form>
                              <FormGroup>
                                  <Label for="name">Seu nome</Label>
                                  <Input type="text" id="name" defaultValue={name} onChange={
                                    () => setName(document.getElementById('name').value)
                                  } />                                    
                              </FormGroup>
                              <FormGroup>
                                  <Label for="description">Email</Label>
                                  <Input type="text" id="email" defaultValue={email} onChange={
                                    () => setEmail(document.getElementById('email').value)
                                  } />                                    
                              </FormGroup>
                              <FormGroup>
                                  <Label for="description">Senha</Label>
                                  <Input type="password" id="password" onChange={
                                    () => setPassword(document.getElementById('password').value)
                                  } />                                    
                              </FormGroup>
                              <FormGroup>
                                  <Link onClick={handleClick}>Salvar</Link>
                              </FormGroup>
                          </Form>
                      </CardBody>
                  </Card>
              </Col>             
            </Row>
        </div>
      </div>
    </div> 
  );
}

export default Account;