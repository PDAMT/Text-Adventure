const express = require('express')
const apiRoute = express.Router()
import { Application, Request, Response, NextFunction } from 'express';
import StoryControllerGet from '../controllers/StoryControllerGet'
import StoryControllerUpdate from '../controllers/StoryControllerUpdate';

apiRoute.get('/users/:id',
  StoryControllerGet.getUser,
  (req: Request, res: Response) => {
    console.log(res.locals.player1)
  })

apiRoute.get('/users',
  StoryControllerGet.getUsers,
  (req: Request, res: Response) => {
    const player1 = res.locals.users[0];
    console.log("🚀 ~ file: apiRoute.ts ~ line 10 ~ player1", player1);
    const player2 = res.locals.users[1];
    console.log("🚀 ~ file: apiRoute.ts ~ line 11 ~ player2", player2);
    res.setHeader('content-type', 'application/json');
    res.status(200).send(res.locals.users);
  });

//update function
// GET request for prompts
apiRoute.get('/prompts/:id',
  StoryControllerGet.getPrompt,
  (req: Request, res: Response) => {
    res.setHeader('content-type', 'application/json');
    res.status(200).send(res.locals.prompt);
  });
apiRoute.get('/prompt', (req: Request, res: Response) => {
  res.setHeader('content-type', 'application/json');
  res.status(200).send(res.locals.prompt);
});

apiRoute.patch('/', (req: Request, res: Response) => {
  res.send('Another API route page');
});
// Get Answers from Rooms
apiRoute.get('/rooms/:id', StoryControllerGet.getAnswer, (req: Request, res: Response) => {
  res.setHeader('content-type', 'application/json');
  res.status(200).send(res.locals.answer);
});

apiRoute.get('/hints/:id', StoryControllerGet.getHint, (req: Request, res: Response) => {
  res.setHeader('content-type', 'application/json');
  res.status(200).send(res.locals.hint);
});

export default apiRoute;