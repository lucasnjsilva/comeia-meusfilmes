import { Router } from 'express';

import usersRouter from './users.routes';
import moviesRouter from './movies.routes';
import favoriteRouter from './favorites.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/movies', moviesRouter);
routes.use('/favorites', favoriteRouter);

export default routes;
