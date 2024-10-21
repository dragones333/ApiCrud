import { Request, Response } from 'express';
import Todo from '../models/Todo';

class TodoController {
    static async getAllTodos(req: Request, res: Response) {
        const todos = await Todo.findAll();
        res.json(todos);
    }

    static async getTodoById(req: Request, res: Response) {
        const todo = await Todo.findByPk(req.params.id);
        res.json(todo);
    }

    static async createTodo(req: Request, res: Response) {
        const todo = await Todo.create(req.body);
        res.status(201).json(todo);
    }

    static async updateTodo(req: Request, res: Response) {
        const todo = await Todo.findByPk(req.params.id);
        if (todo) {
            await todo.update(req.body);
            res.json(todo);
        } else {
            res.status(404).send('Todo not found');
        }
    }

    static async deleteTodo(req: Request, res: Response) {
        const todo = await Todo.findByPk(req.params.id);
        if (todo) {
            await todo.destroy();
            res.status(204).send();
        } else {
            res.status(404).send('Todo not found');
        }
    }
}

export default TodoController;

