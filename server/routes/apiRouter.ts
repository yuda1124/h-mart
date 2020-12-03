import express from 'express';
import userRouter from './userRouter';
import productsRouter from './productsRouter';
const router = express.Router();

router.use('/user', userRouter);
router.use('/products', productsRouter);
export default router;
