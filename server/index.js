import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import dotenv from 'dotenv';

import userRoutes from './route/userRoute.js'
import courseRoute from './route/courseRoute.js'

const app = express();
dotenv.config();


app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/users', userRoutes);
app.use('/courses', courseRoute);

app.get('/', (req, res) => {
    res.send('Hello to E-Learning-System API!');
})

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.USER_DB_CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false)