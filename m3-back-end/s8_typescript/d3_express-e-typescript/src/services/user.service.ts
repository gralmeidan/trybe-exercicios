import User from '../interfaces/user.interface';
import connection from '../models/connection';
import UserModel from '../models/user.model';

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
}

export default UserService;
