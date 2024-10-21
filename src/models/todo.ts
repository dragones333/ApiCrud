import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/config';

class Todo extends Model {
    public id!: number;
    public title!: string;
    public description!: string;
    public completed!: boolean;
}

Todo.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
}, {
    sequelize,
    tableName: 'todos',
});

export default Todo;
