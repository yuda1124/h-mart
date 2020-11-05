import express from 'express';
import { UserController } from '../controllers';
import { wrapAsync } from '../utils';
const router = express.Router();

/* GET users listing. */
router.post('/', wrapAsync(UserController.create));

export default router;
