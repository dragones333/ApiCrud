import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('database_name', 'username', 'password', {
    host: 'apicrud', 
    dialect: 'mysql',
});

export default sequelize;
