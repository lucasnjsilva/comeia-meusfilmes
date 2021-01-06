import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar(props) {
    return (
        <aside id="sidebar">
            <div className="sidebar-title">
                <h2>Meus Filmes</h2>
            </div>
            <div className="list-group">
                <Link to="/" className="list-group-item"> Home </Link>
                <Link to="/movie" className="list-group-item"> Cadastrar Filme </Link>
                <Link to="/favorites" className="list-group-item"> Favoritos </Link>
                <Link to="/account" className="list-group-item"> Minha Conta </Link>
                <Link to="/logout" className="list-group-item"> Sair </Link>
            </div>
        </aside>
    );
}