/* eslint-disable no-console */
import express from 'express';
import cors from 'cors';
import 'express-async-errors';

import './database';

import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
    console.log('Server online ✔');
});
