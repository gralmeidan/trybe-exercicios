import { Request, Response } from 'express';
import PlantService from '../services/plant.service';

export default class PlantController {
  private service: PlantService;

  constructor(service: PlantService) {
    this.service = service;
  }

  public getAll = async (_req: Request, res: Response): Promise<void> => {
    const response = await this.service.getAll();

    res.status(200).json(response);
  };
}
