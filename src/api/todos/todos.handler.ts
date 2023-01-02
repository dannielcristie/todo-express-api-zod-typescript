import { Request, Response, NextFunction } from 'express';
import { TodoWithId, Todos } from './todos.model';

export const findAll = async (req: Request, res: Response<TodoWithId[]>, next: NextFunction) => {
  try {
    const result = await Todos.find();
    const todos = await result.toArray();
    res.json(todos);
  } catch (error) {
    next(error);
  };
};