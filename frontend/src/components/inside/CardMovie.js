import React, { useState, useEffect } from 'react';
import { config } from '../../utils/auth';
import { Link } from 'react-router-dom';
import { Row, Col, Card, CardHeader, CardBody, CardFooter } from 'reactstrap';

import api from '../../services/api';


const CardMovie = (props) => {
    const [favorite, setFavorite] = useState(false);

    useEffect(() => {
        setFavorite(props.favorite);
    }, [props.favorite]);

    const handleFavorite = async () => {
        await api.patch(`/favorites/${props.id}`, config);
    }

    const handleDelete = async () => {
        await api.delete(`/movies/${props.id}`, config);
    }

    return(
        <div>
            <Row>
                <Col>
                    <Card className="card-movie">
                        <CardHeader>
                            <h4>{props.name}</h4>
                        </CardHeader>
                        <CardBody>
                            {props.description}
                        </CardBody>
                        <CardFooter>
                            {
                                favorite === false ? 
                                    <Link onClick={handleFavorite}>Adicionar aos Favoritos</Link>
                                :
                                    <Link onClick={handleFavorite} className="text-secondary" >Remover dos Favoritos</Link>
                            }
                            {
                                <Link onClick={handleDelete} className="float-right text-danger"> Excluir </Link>
                            }
                        </CardFooter>
                    </Card>
                </Col>              
            </Row>
        </div>            
    );
}

export default CardMovie;