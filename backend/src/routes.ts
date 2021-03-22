import { Router } from 'express';

const router = Router();

import UserController from './controllers/UserController';

router.get('/', UserController.index);

router.get('/users/send-email', UserController.create);

export default router;



