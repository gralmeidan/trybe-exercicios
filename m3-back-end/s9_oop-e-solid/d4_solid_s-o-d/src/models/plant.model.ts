import { readFile, writeFile } from 'fs/promises';
import Plant from '../types/Plant.type';

export default class PlantModel {
  private pathToFile = './src/plantsData.json';

  private writeToFile = async (content: Plant[]): Promise<void> => {
    await writeFile(this.pathToFile, JSON.stringify(content));
  };

  public getAll = async (): Promise<Plant[]> => {
    const content = await readFile(this.pathToFile, 'utf-8');
    return JSON.parse(String(content));
  };

  public findById = async (query: string): Promise<Plant> => {
    const plants = await this.getAll();
    return plants.filter(({ id }) => id === query)[0];
  };

  public findByExcludeId = async (query: string): Promise<Plant[]> => {
    const plants = await this.getAll();
    return plants.filter(({ id }) => id !== query);
  };

  public remove = async (query: string): Promise<void> => {
    const plants = await this.findByExcludeId(query);
    await this.writeToFile(plants);
  };

  public insert = async (plant: Plant): Promise<void> => {
    const plants = await this.getAll();
    await this.writeToFile([...plants, plant]);
  };
}
