import { Request, Response } from "express";
import userCreateService from "../../services/users/userCreate.service";

const createUserController = (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const newUser = userCreateService({ name, email, password });

    return res.status(201).send(newUser);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default createUserController;
