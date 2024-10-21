"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTodo = exports.getAllTodos = void 0;
let todos = [
    { id: 1, title: 'Task 1', description: 'Description 1', completed: false }
];
const getAllTodos = (req, res) => {
    res.json(todos);
};
exports.getAllTodos = getAllTodos;
const createTodo = (req, res) => {
    const newTodo = req.body;
    todos.push(newTodo);
    res.status(201).json(newTodo);
};
exports.createTodo = createTodo;
