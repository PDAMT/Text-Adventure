const db = require('../models/storyModel');
import { Application, Request, Response, NextFunction } from 'express';

class StoryControllerBlueprint {
  constructor() {

  }
  createUsers(req: Request, res: Response, next: NextFunction): any {
    // write code here

    next();
  };
  async getUsers(req: Request, res: Response, next: NextFunction): Promise<void> {
    const queryStr: string = `SELECT * FROM users;`;
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
  updateUsers(req: Request, res: Response, next: NextFunction): any {
    // write code here

    next();
  };
  deleteUsers(req: Request, res: Response, next: NextFunction): any {
    // write code here

    next();
  };

  //Get Prompts 
  async getPrompts(req: Request, res: Response, next: NextFunction): Promise<void> {
  const queryStr: string = `SELECT * FROM prompts`;
  const result = await db.query(queryStr);
  const prompts: Array<
    {
      id: number,
      prompt: string,
      room_id: number,
      answers: string
    } 
    > = result.rows;
  res.locals.prompts = prompts;
  next();
  }
}

const StoryController = new StoryControllerBlueprint;

export default StoryController;
