import * as authController from '../controllers/auth.controller';
import { Router } from 'express';
import authHandler from '../middleware/authHandler';

const router = Router();

router.route('/login').post(authController.login);

router.route('/logout').post(authHandler, authController.logout);

router
  .route('/logout_tokens')
  .post(authHandler, authController.logoutAllSessions);

export { router };
