import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import { config } from '../utils/auth';
import Header from './../components/Header';
import Sidebar from './../components/Sidebar';
import { Row, Col, Card, CardHeader, CardBody, Form, FormGroup, Label, Input } from 'reactstrap';

const Movie = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const id = localStorage.getItem('id');

  const handleClick = async () => {
    const data = {
      name,
      description,
    }

    api.post(`/movies/${id}`, data, config);

    alert('Filme cadastrado.');

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
                        <h4>Cadastrar um Filme</h4>
                    </CardHeader>
                    <CardBody>
                        <Form>
                            <FormGroup>
                                <Label for="name">Nome do Filme</Label>
                                <Input type="text" id="name" onChange={
                                  () => setName(document.getElementById('name').value)
                                } />                                    
                            </FormGroup>
                            <FormGroup>
                                <Label for="description">Descrição</Label>
                                <Input type="textarea" id="description" onChange={
                                  () => setDescription(document.getElementById('description').value)
                                } />                                    
                            </FormGroup>
                            <FormGroup>
                                <Link onClick={handleClick}>Cadastrar</Link>
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

export default Movie;