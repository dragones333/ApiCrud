"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('database_name', 'username', 'password', {
    host: 'apicrud',
    dialect: 'mysql',
});
exports.default = sequelize;
