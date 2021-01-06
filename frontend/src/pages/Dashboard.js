import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { config } from '../utils/auth';
import Header from './../components/Header';
import Sidebar from './../components/Sidebar';
import CardMovie from '../components/inside/CardMovie';

const Dashboard = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api.get('/movies', config).then((response) => setMovies(response.data));
  });

  return (
    <div className="d-flex" id="main-wrapper">
      <Sidebar />
      <div id="content-wrapper">
        <Header />

        <div className="content-dynamic">
          {
            movies.map((movie) => (
              <CardMovie key={movie.id} id={movie.id} name={movie.name} description={movie.description} favorite={movie.favorite} />
            ))
          }
        </div>
      </div>
    </div> 
  );
}

export default Dashboard;