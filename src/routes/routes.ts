import { Router } from "express";

import createUserController from "../controllers/users/userCreate.controller";
import userListController from "../controllers/users/userList.controller";

const routes = Router();

routes.get("", userListController);
routes.post("/signup", createUserController);

export default routes;
