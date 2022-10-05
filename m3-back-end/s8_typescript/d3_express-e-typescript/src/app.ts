import express, { Request, Response } from 'express';
import 'express-async-errors';
import morgan from 'morgan';
import handleError from './middlewares/handleError.middleware';
import userRouter from './routes/user.routes';

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/user', userRouter);

app.use(handleError);

export default app;
