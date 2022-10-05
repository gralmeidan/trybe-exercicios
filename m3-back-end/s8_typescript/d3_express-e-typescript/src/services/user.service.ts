import { StatusCodes } from 'http-status-codes';
import RestError from '../errors/rest.error';
import User from '../interfaces/user.interface';
import connection from '../models/connection';
import UserModel from '../models/user.model';
import { newUserSchema, updateUserSchema } from './schemas/user.schema';

class UserService {
  private model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async getAll(): Promise<User[]> {
    const users = await this.model.getAll();
    return users;
  }

  public async getById(id: string): Promise<User> {
    const user = await this.model.getById(Number(id));
    return user;
  }

  public async create(user: User): Promise<number> {
    const { error } = newUserSchema.validate(user);

    if (error) {
      throw new RestError(error.message, StatusCodes.UNPROCESSABLE_ENTITY);
    }

    const response = await this.model.create(user);
    return response;
  }

  public async update(user: Partial<User>, id: string) {
    const { error } = updateUserSchema.validate(user);

    if (error) {
      throw new RestError(error.message, StatusCodes.UNPROCESSABLE_ENTITY);
    }

    await this.model.update(user, id);
  }

  public async remove(id: string) {
    await this.model.remove(id);
  }
}

export default UserService;
