import { Request, Response, NextFunction } from 'express';

export const wrapAsync = (
  fn: (req: Request, res: Response, next: NextFunction) => Promise<void>
) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    fn(req, res, next).catch(next);
  };
};

export const getCurrentTime = () =>
  new Date().toISOString().slice(0, 19).replace('T', ' ');
