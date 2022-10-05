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

  public getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await this.service.getById(id);

    if (user) {
      return res.status(StatusCodes.OK).json(user);
    }
    res.status(StatusCodes.NOT_FOUND).json({
      message: 'User not found',
    });
  };

  public create = async (req: Request, res: Response) => {
    const insertId = await this.service.create(req.body);

    res.status(StatusCodes.CREATED).json({ insertId });
  };

  public update = async (req: Request, res: Response) => {
    const { id } = req.params;

    await this.service.update(req.body, id);

    res.status(StatusCodes.NO_CONTENT).send();
  };
}

export default UserController;
