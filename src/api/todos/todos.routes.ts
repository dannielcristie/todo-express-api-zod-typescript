import * as TodoHandlers from './todos.handler';
import { Router } from 'express';

const router = Router();

router.get('/', TodoHandlers.findAll);
router.post('/', TodoHandlers.createOne);

export default router;