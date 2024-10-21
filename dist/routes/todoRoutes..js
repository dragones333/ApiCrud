"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoRoutes = void 0;
const express_1 = require("express");
const todoController_1 = require("../controllers/todoController");
exports.todoRoutes = (0, express_1.Router)();
exports.todoRoutes.get('/', todoController_1.getAllTodos);
exports.todoRoutes.post('/', todoController_1.createTodo);
