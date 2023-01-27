import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.headers;

      const users = this.listAllUsersUseCase.execute({
        user_id: String(user_id),
      });

      // const users2 = this.listAllUsersUseCase.execute({ user_id } as {
      //   user_id: string;
      // });

      // const users3 = this.listAllUsersUseCase.execute({
      //   user_id: user_id.toString(),
      // });

      return response.status(201).json(users);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { ListAllUsersController };
