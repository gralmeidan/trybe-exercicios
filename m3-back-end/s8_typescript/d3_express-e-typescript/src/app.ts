import express, { Request, Response } from 'express';
import 'express-async-errors';
import morgan from 'morgan';
import userRouter from './routes/user.routes';

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/user', userRouter);

export default app;
