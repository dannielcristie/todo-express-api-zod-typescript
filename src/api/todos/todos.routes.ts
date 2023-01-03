import { Router } from 'express';
import { ParamsWithId } from '../../interfaces/ParamsWithId';
import { validadeRequest } from '../../middlewares';
import * as TodoHandlers from './todos.handler';
import { Todo } from './todos.model';


const router = Router();

router.get('/', TodoHandlers.findAll);
router.get(
  '/:id',
  validadeRequest({
    params: ParamsWithId,
  }),
  TodoHandlers.findOne);

router.post(
  '/',
  validadeRequest({
    body: Todo,
  }),
  TodoHandlers.createOne);

export default router;