import * as express from "express";
import { Application, Request, Response, NextFunction } from 'express';
import * as path from 'path'; // NEW

const app = express.default();
// const port = process.env.PORT || 3000;
const port: number = 3000;
const DIST_DIR = path.resolve(__dirname, '../dist'); // NEW
const HTML_FILE = path.join(DIST_DIR, 'index.html'); // NEW

app.use(express.static(DIST_DIR)); // NEW

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  console.log(`Endpoint: '/' being reached.`);
  res.status(200).sendFile(HTML_FILE); // EDIT
});

app.listen(port, function () {
  console.log('App listening on port: ' + port);
});

