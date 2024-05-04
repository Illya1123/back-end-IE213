import { Request, Response } from 'express';
export declare const createOrder: (req: Request, res: Response) => Promise<void>;
export declare const getOrderDetail: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
