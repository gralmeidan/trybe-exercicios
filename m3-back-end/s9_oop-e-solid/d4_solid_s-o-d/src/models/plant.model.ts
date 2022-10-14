import { readFile } from 'fs/promises';
import Plant from '../types/Plant.type';

export default class PlantModel {
  private pathToFile = './src/plantsData.json';

  public getAll = async (): Promise<Plant[]> => {
    const content = await readFile(this.pathToFile, 'utf-8');
    return JSON.parse(String(content));
  };

  public findById = async (query: string): Promise<Plant> => {
    const plants = await this.getAll();
    return plants.filter(({ id }) => id === query)[0];
  };
}
