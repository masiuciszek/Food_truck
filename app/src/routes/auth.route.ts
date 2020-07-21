import * as authController from '../controllers/auth.controller';
import { Router } from 'express';

const router = Router();

router.route('/login').post(authController.login);
router.route('/logout').post(authController.logout);

router.route('/').get(authController.test);

export { router };
