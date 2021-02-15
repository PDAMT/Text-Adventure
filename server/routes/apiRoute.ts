const express = require('express')
const apiRoute = express.Router()
import { Application, Request, Response, NextFunction } from 'express';
import StoryController from '../controllers/storyController'

apiRoute.get('/users',
  StoryController.getUsers,
  function (req: Request, res: Response) {
    const player1 = res.locals.users[0];
    console.log("🚀 ~ file: apiRoute.ts ~ line 10 ~ player1", player1);
    const player2 = res.locals.users[1];
    console.log("🚀 ~ file: apiRoute.ts ~ line 11 ~ player2", player2);
    res.status(200);
  });
  //update function
// GET request for prompts
apiRoute.get('/prompts', function (req: Request, res: Response) {
  res.send('Another API route page');
});

apiRoute.patch('/', function (req: Request, res: Response) {
  res.send('Another API route page');
});

apiRoute.get('/', function (req: Request, res: Response) {
  res.send('Another API route page');
});
apiRoute.get('/', function (req: Request, res: Response) {
  res.send('Another API route page');
});

export default apiRoute;