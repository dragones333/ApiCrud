import { Router } from 'express';
import { getAllTodos, createTodo } from '../controllers/todoController';

export const todoRoutes = Router();

todoRoutes.get('/', getAllTodos);
todoRoutes.post('/', createTodo);
