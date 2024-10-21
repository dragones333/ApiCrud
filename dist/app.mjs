"use strict";

const express = require('express');
import bodyParser from 'body-parser';
import todoRoutes from '../src/routes/todoRoutes';
import config from '../src/config/config';

const app = express(); 
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/todos', todoRoutes);

config.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => console.log(err));
