import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { serverPort } from './config.json';
import * as db from './utils/dbUtils';

// db.setUpConnection();

const app = express();

app.use(bodyParser.json());
app.use(cors());

const server = app.listen(serverPort, () => {
    console.log(`We are live on ${serverPort}`);
});

// add user

app.use('/api/users', db.router);

// app.post('/users', (req, res) => {
//     db.addUser(req.body).then(data => res.send(data));
// });