import { Router } from 'express';

import CreateUser from '../controllers/UserController/CreateUser';
import DetailUser from '../controllers/UserController/DetailUser';
import UpdateUser from '../controllers/UserController/UpdateUser';
import DeleteUser from '../controllers/UserController/DeleteUser';
import SessionUser from '../controllers/UserController/SessionUser';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const userRouter = Router();

// Usuários
userRouter.post('/', CreateUser.execute);
userRouter.post('/session/', SessionUser.execute);
userRouter.get('/:id', ensureAuthenticated, DetailUser.execute);
userRouter.put('/:id', ensureAuthenticated, UpdateUser.execute);
userRouter.delete('/:id', ensureAuthenticated, DeleteUser.execute);

export default userRouter;
