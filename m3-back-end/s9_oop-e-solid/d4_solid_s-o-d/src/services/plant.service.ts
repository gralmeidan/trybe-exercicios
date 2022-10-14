import PlantModel from '../models/plant.model';
import Plant from '../types/Plant.type';

export default class PlantService {
  private model: PlantModel;

  constructor(model: PlantModel) {
    this.model = model;
  }

  public getAll = async (): Promise<Plant[]> => {
    const results = await this.model.getAll();
    return results;
  };

  public findById = async (query: string): Promise<Plant> => {
    const result = await this.model.findById(query);
    return result;
  };
}
