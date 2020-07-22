import * as userController from '../controllers/user.controller';
import { Router } from 'express';

const router = Router();

router.route('/all_users').get(userController.getAllUsers);

router.route('/me/:id').get(userController.getMe);

router.route('/register').post(userController.registerUser);

export { router };
