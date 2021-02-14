const db = require('../models/starWarsModels');
import { Application, Request, Response, NextFunction } from 'express';

class StoryControllerBlueprint {
  constructor() {

  }
  getUsers(req: Request, res: Response, next: NextFunction): any {
    // write code here

    next();
  };
}

const StoryController = new StoryControllerBlueprint;

module.exports = StoryController;