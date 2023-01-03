import { Request, Response, NextFunction } from 'express';
import { TodoWithId, Todos, Todo } from './todos.model';
import { ZodError } from 'zod';

export const findAll = async (req: Request, res: Response<TodoWithId[]>, next: NextFunction) => {
  try {
    const result = await Todos.find();
    const todos = await result.toArray();
    res.json(todos);
  } catch (error) {
    next(error);
  };
};



export const createOne = async (req: Request<{}, TodoWithId, Todo>, res: Response<TodoWithId>, next: NextFunction) => {
  try {
    const insertResult = await Todos.insertOne(req.body);
    if (!insertResult.acknowledged) throw new Error('Error inserting todo');
    res.status(201);
    res.json({
      _id: insertResult.insertedId,
      ...req.body
    });
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(422);
    }
    next(error);
  };
};


