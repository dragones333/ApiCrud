"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todoRoutes__js_1 = require("./routes/todoRoutes..js");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/todos', todoRoutes__js_1.todoRoutes);
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});