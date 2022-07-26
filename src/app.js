import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { ErrorsMiddleware } from './middlewares/Errors';
import { MongoErrors } from './middlewares/MongoErrors';
import { api } from './routes';

// Server settings
export const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/',api);

app.use(MongoErrors);
app.use(ErrorsMiddleware);