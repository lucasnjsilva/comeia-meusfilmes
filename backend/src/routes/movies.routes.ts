import { Router } from 'express';

import CreateMovie from '../controllers/MovieController/CreateMovie';
import DeleteMovie from '../controllers/MovieController/DeleteMovie';
import DetailMovie from '../controllers/MovieController/DetailMovie';
import ListMovies from '../controllers/MovieController/ListMovies';
import UpdateMovie from '../controllers/MovieController/UpdateMovie';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const moviesRouter = Router();

moviesRouter.post('/:user_id', ensureAuthenticated, CreateMovie.execute);
moviesRouter.get('/', ensureAuthenticated, ListMovies.execute);
moviesRouter.get('/:id', ensureAuthenticated, DetailMovie.execute);
moviesRouter.put('/:id', ensureAuthenticated, UpdateMovie.execute);
moviesRouter.delete('/:id', ensureAuthenticated, DeleteMovie.execute);

export default moviesRouter;
