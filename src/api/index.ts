import express from 'express';

import todos from "./todos/todos.routes";

const router = express.Router();

router.use('/todos', todos);

export default router;
