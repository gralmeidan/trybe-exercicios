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

  public findById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    const response = await this.service.findById(id);

    if (response) {
      res.status(200).json(response);
      return;
    }
    res.status(404).json({
      message: 'Plant not found',
    });
  };

  public remove = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    await this.service.remove(id);

    res.status(204).send();
  };

  public insert = async (req: Request, res: Response): Promise<void> => {
    const id = await this.service.insert(req.body);

    res.status(201).json({
      ...req.body,
      id,
    });
  };
}
