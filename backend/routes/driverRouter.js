import express from 'express';
import { addDriver, deleteDriver, getAllDrivers, updateDriver } from '../controllers/driverController.js';


const driverRouter = express.Router();

driverRouter.post("/", addDriver);
driverRouter.get("/", getAllDrivers);
driverRouter.put('/:id', updateDriver);
driverRouter.delete('/:id', deleteDriver);

export default driverRouter;



