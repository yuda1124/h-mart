import express from 'express';
import { wrapAsync } from '../utils';
import { ProductController } from '../controllers';
const router = express.Router();

router.post('/', wrapAsync(ProductController.createBulk));
router.get('/', wrapAsync(ProductController.find));
export default router;
