const db = require('../models/storyModel');
import { Application, Request, Response, NextFunction } from 'express';

class StoryControllerUpdateBlueprint {
  async moveToNextRoom(req: Request, res: Response, next: NextFunction): Promise<void> {
    const queryStr: string = `SELECT * FROM users;`;
    const result = await db.query(queryStr);

  }
  updateUsersAttempts(req: Request, res: Response, next: NextFunction): any {
    // write code here
    next();
  };
  deleteUsers(req: Request, res: Response, next: NextFunction): any {
    // write code here

    next();
  };
}

const StoryControllerUpdate = new StoryControllerUpdateBlueprint;
export default StoryControllerUpdate;