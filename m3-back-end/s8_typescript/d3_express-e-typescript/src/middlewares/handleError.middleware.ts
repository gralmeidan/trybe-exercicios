import { NextFunction, Request, Response } from 'express';
import RestError from '../errors/rest.error';

export default function handleError(
  error: RestError,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  const { statusCode, message } = error;

  if (statusCode) {
    return res.status(statusCode).json({ message });
  }

  res.status(500).json({ message: 'Something went wrong' });
  console.log(message);
}
