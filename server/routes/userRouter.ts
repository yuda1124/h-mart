import express from 'express';
import { UserController } from '../controllers';
import { wrapAsync } from '../utils';
import { validateCreateUser } from '../middlewares/validator';
const router = express.Router();

router.post('/signup', validateCreateUser, wrapAsync(UserController.create));
router.post('/signin', wrapAsync(UserController.signIn));
export default router;
