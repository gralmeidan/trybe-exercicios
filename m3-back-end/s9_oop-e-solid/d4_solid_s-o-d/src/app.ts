import express from 'express';
import PlantController from './controllers/plant.controller';
import PlantModel from './models/plant.model';
import PlantService from './services/plant.service';

const app = express();

app.use(express.json());

const model = new PlantModel();
const service = new PlantService(model);
const controller = new PlantController(service);

app.get('/plants', controller.getAll);
app.get('/plant/:id', controller.findById);
app.delete('/plant/:id', controller.remove);
app.post('/plants', controller.insert);

export default app;
