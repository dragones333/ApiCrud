"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });

const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const todoRoutes_1 = __importDefault(require("../dist/routes/todoRoutes"));
const config_1 = __importDefault(require("../dist/config/config"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(body_parser_1.default.json());
app.use('/todos', todoRoutes_1.default);
config_1.default.sync()
    .then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
    .catch(err => console.log(err));
