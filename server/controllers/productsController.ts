import { Request, Response, NextFunction } from 'express';
import { ProductService } from '../services';

const createBulk = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { products } = req.body;
  console.log(products);
  await ProductService.createBulk(products);
  res.json({ success: true });
};

export default { createBulk };
