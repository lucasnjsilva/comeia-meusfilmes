import { Router } from 'express';

import AddFavorite from '../controllers/MovieController/AddFavorite';
import ListFavorites from '../controllers/MovieController/ListFavorites';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const favoriteRouter = Router();

favoriteRouter.patch('/:id', AddFavorite.execute);
favoriteRouter.get('/', ensureAuthenticated, ListFavorites.execute);

export default favoriteRouter;
