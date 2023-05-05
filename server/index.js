import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import morgan from "morgan";
import {
    clientRouter,
    managmentRouter,
    salesRouter,
    generalRouter
} from './routes/index.js'
import mongoose from "mongoose";

//config
dotenv.config();
const app = express();
const port = process.env.PORT || 9000

//Middleweares
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(cors());


//Routes
app.use('/client', clientRouter);
app.use('/general', generalRouter);
app.use('/managment', managmentRouter);
app.use('/sales', salesRouter);

//db connection
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    app.listen(port, () => console.log('running server, port: ', port))
}).catch(err => console.log(err));


