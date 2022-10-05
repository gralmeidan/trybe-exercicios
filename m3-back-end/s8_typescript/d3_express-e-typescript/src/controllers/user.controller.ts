import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UserService from '../services/user.service';

class UserController {
  private service: UserService;

  constructor() {
    this.service = new UserService();
  }

  public getAll = async (_req: Request, res: Response) => {
    const users = await this.service.getAll();
    res.status(StatusCodes.OK).json(users);
  };
}

export default UserController;
