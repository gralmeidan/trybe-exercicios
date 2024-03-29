import { Router } from 'express';
import UserController from '../controllers/user.controller';

const userRouter = Router();
const controller = new UserController();

userRouter.get('/', controller.getAll);
userRouter.get('/:id', controller.getById);

userRouter.post('/', controller.create);

userRouter.put('/:id', controller.update);

userRouter.delete('/:id', controller.remove);

export default userRouter;
