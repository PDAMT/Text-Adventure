import * as express from "express";
import { Application, Request, Response, NextFunction } from 'express';
import * as path from 'path';
import apiRoute from './routes/apiRoute';
import cors from 'cors';

const app = express.default();

// corse() disable's all NO-CORS errors 
app.use(cors());

const port: number = 3000;
const DIST_DIR = path.resolve(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

//server static file
app.use(express.static(DIST_DIR));

//route to api endpoint
app.use('/api', apiRoute);

//serve index.html on root enpoint
app.get('/', (req: Request, res: Response, next: NextFunction) => {
  console.log(`Endpoint: '/' being reached.`);
  res.status(200).sendFile(HTML_FILE);
});

app.listen(port, function () {
  console.log('App listening on port: ' + port);
});
