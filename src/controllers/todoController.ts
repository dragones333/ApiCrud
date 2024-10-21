import { Request, Response } from 'express';

let todos = [
  { id: 1, title: 'Task 1', description: 'Description 1', completed: false }
];

export const getAllTodos = (req: Request, res: Response) => {
  res.json(todos);
};

export const createTodo = (req: Request, res: Response) => {
  const newTodo = req.body;
  todos.push(newTodo);
  res.status(201).json(newTodo);
};
