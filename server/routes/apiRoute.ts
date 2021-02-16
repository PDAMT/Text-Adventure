const express = require('express');
const apiRoute = express.Router();
import { Application, Request, Response, NextFunction } from 'express';
import StoryControllerGet from '../controllers/StoryControllerGet'
import StoryControllerUpdate from '../controllers/StoryControllerUpdate';

//Currently, DB doesn't store username's, but route exists to get usernames should they be stored.
apiRoute.get('/users/:id',
  StoryControllerGet.getUser,
  (req: Request, res: Response) => {
    console.log(res.locals.player1)
  })

//Currently, DB doesn't store username's, but route exists to get usernames should they be stored.
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

//empty route incase another API endpoint is needed
apiRoute.patch('/', (req: Request, res: Response) => {
  res.send('Another API route page');
});

// Get Answers from Rooms
apiRoute.get('/rooms/:id', StoryControllerGet.getAnswer, (req: Request, res: Response) => {
  res.setHeader('content-type', 'application/json');
  res.status(200).send(res.locals.answer);
});

// Get hints
apiRoute.get('/hints/:id', StoryControllerGet.getHint, (req: Request, res: Response) => {
  res.setHeader('content-type', 'application/json');
  res.status(200).send(res.locals.hint);
});

export default apiRoute;
