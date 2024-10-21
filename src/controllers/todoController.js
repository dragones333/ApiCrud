"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Todo_1 = __importDefault(require("../models/Todo"));
class TodoController {
    static getAllTodos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const todos = yield Todo_1.default.findAll();
            res.json(todos);
        });
    }
    static getTodoById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const todo = yield Todo_1.default.findByPk(req.params.id);
            res.json(todo);
        });
    }
    static createTodo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const todo = yield Todo_1.default.create(req.body);
            res.status(201).json(todo);
        });
    }
    static updateTodo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const todo = yield Todo_1.default.findByPk(req.params.id);
            if (todo) {
                yield todo.update(req.body);
                res.json(todo);
            }
            else {
                res.status(404).send('Todo not found');
            }
        });
    }
    static deleteTodo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const todo = yield Todo_1.default.findByPk(req.params.id);
            if (todo) {
                yield todo.destroy();
                res.status(204).send();
            }
            else {
                res.status(404).send('Todo not found');
            }
        });
    }
}
exports.default = TodoController;
