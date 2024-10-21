import express from 'express';
import bodyParser from 'body-parser';
import Todo from './models/Todo';
import todoRoutes from './routes/todoRoutes';
import sequelize from './config/config';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/todos', todoRoutes);

sequelize.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => console.log(err));
