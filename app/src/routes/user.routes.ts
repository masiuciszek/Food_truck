import * as userController from '../controllers/user.controller';
import { Router } from 'express';

const router = Router();

router.route('/register').post(userController.registerUser);

export { router };
