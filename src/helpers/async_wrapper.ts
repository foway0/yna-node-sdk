import { RequestHandler, Request, Response, NextFunction } from 'express';

export interface WrapHandler {
  (req: Request, res: Response, next: NextFunction): Promise<void>;
}

export const wrap = (fn: WrapHandler): RequestHandler => {
  return (req, res, next) => fn(req, res, next).catch(next);
};
