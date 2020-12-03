import { Request, Response, NextFunction } from 'express';
import { ProductService } from '../services';

const createBulk = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { products } = req.body;
  await ProductService.createBulk(products);
  res.json({ success: true });
};

const find = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const products = await ProductService.find();
  res.json({ success: true, products });
};

export default { createBulk, find };
