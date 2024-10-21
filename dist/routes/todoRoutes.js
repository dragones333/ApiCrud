"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todoController_1 = __importDefault(require("../controllers/todoController"));
const router = (0, express_1.Router)();
router.get('/', todoController_1.default.getAllTodos);
router.get('/:id', todoController_1.default.getTodoById);
router.post('/', todoController_1.default.createTodo);
router.put('/:id', todoController_1.default.updateTodo);
router.delete('/:id', todoController_1.default.deleteTodo);
exports.default = router;
