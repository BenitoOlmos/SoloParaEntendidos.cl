import { Router } from 'express';
import { UserController } from '../controllers/user.controller.js';
import { validateRequest } from '../middlewares/validate.middleware.js';
import { UserSchema } from '@spe/schemas';

const router = Router();

router.get('/', UserController.getAll);
router.post('/', validateRequest(UserSchema), UserController.create);

export default router;
