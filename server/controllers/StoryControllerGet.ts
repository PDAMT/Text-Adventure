const db = require('../models/storyModel');
// import db from '../models/storyModel';
import { Application, Request, Response, NextFunction } from 'express';
import { getRoomPrompt, getPlayer, getAllPlayers, getAnswer } from './helperFunctions/GetHelperFunctions';
class StoryControllerGetBlueprint {
  // createUsers(req: Request, res: Response, next: NextFunction): any {
  //   // write code here

  //   next();
  // };
  // Get all players
  async getUsers(req: Request, res: Response, next: NextFunction): Promise<void> {
    const queryStr: string = getAllPlayers();
    const result = await db.query(queryStr);
    const players: Array<
      {
        id: number,
        name: string,
        room_1_attempts: number,
        room_2_attempts: number,
        room_3_attempts: number,
        room_id: number
      }
    > = result.rows;
    res.locals.users = players;
    next();
  }
  // Get a player
  async getUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    const id = req.params.id;
    const queryStr: string = getPlayer(id)
    const result = await db.query(queryStr);
    const player:
      {
        id: number,
        name: string,
        room_1_attempts: number,
        room_2_attempts: number,
        room_3_attempts: number,
        room_id: number
      }
      = result.rows;
    id === '1' ? res.locals.player1 = player : res.locals.player2 = player;
    next();
  }
  //Get prompts 
  async getPrompt(req: Request, res: Response, next: NextFunction): Promise<void> {
    const id = req.params.id;
    // console.log(id);
    const queryStr: string = getRoomPrompt(id);
    const result = await db.query(queryStr);
    const prompt:
      {
        prompt: string,
      }
      = result.rows;
    res.locals.prompt = prompt;
    next();
  }
  //Get Answers
  async getAnswer(req: Request, res: Response, next: NextFunction): Promise<void> {
    const id = req.params.id;
    const queryStr: string = getAnswer(id);
    const result = await db.query(queryStr);
    const answer:
      {
        answer: string
      }
      = result.rows;
    res.locals.answer = answer;
    next();
  }
}
const StoryController = new StoryControllerGetBlueprint;
export default StoryController;