import { Request, Response } from 'express';
import { TodoWithId, Todos } from './todos.model';

export const findAll = async (req: Request, res: Response<TodoWithId[]>) => {
  const result = await Todos.find();
  const todos = await result.toArray();
  res.json(todos);
};

