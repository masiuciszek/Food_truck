import * as userController from '../controllers/user.controller';
import { Router } from 'express';
import authHandler from '../middleware/authHandler';

const router = Router();

router.route('/me').get(authHandler, userController.getMe);

router.route('/register').post(userController.registerUser);

export { router };
