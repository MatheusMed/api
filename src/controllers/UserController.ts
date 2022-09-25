import { Request, Response } from 'express';
import User from '../database/schemas/User';

class UserController {

  async find(request: Request, response: Response) {
    try {
      const { id } = request.body;
      const users = await User.find();
      return response.json(users);
    } catch (error) {
      return response.status(500).json({
        error: "Registration failed",
        message: error,
      });
    }
  }

  async create(request: Request, response: Response) {
    const { name, email, password, } = request.body;
    try {

      const userExist = await User.findOne({ email });

      if (userExist) {
        return response.status(400).json({
          error: "Opps",
          message: "User already exist"
        });
      }

      const user = await User.create({
        name, email, password
      });

      return response.json(user);

    } catch (error) {
      return response.status(500).json({
        error: "Registration failed",
        message: error,
      });
    }
  }

}



export default new UserController;