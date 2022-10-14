import PlantModel from '../models/plant.model';
import Plant from '../types/Plant.type';

export default class PlantService {
  private model: PlantModel;

  constructor(model: PlantModel) {
    this.model = model;
  }

  private generateId = () => new Date().toISOString();

  public getAll = async (): Promise<Plant[]> => {
    const results = await this.model.getAll();
    return results;
  };

  public findById = async (query: string): Promise<Plant> => {
    const result = await this.model.findById(query);
    return result;
  };

  public remove = async (query: string): Promise<void> =>
    this.model.remove(query);

  public insert = async (plant: Omit<Plant, 'id'>): Promise<string> => {
    const id = this.generateId();

    await this.model.insert({ ...plant, id });

    return id;
  };
}
