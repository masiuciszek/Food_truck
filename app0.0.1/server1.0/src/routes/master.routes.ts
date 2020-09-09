import * as masterController from '../controllers/master.controller';
import { Router } from 'express';
import authHandler from '../middleware/authHandler';
import { handleMaster } from '../middleware/handleMaster';

const router = Router();

router
  .route('/all_users')
  .get(authHandler, handleMaster, masterController.getAllUsers);

router
  .route('/delete_all_users')
  .delete(authHandler, handleMaster, masterController.deleteAllUsers);

export { router };
