import express from 'express';
import { UserController } from '../controllers';
import { wrapAsync } from '../utils';
const router = express.Router();

router.post('/signup', wrapAsync(UserController.create));
router.post('/signin', wrapAsync(UserController.signIn));
export default router;
