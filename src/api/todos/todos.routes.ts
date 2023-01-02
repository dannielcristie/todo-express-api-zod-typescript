import * as TodoHandlers from './todos.handler';
import { Router } from 'express';

const router = Router();

router.get('/', TodoHandlers.findAll);

export default router;