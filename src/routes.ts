import { Router } from "express";
import { CreatePostController } from "./controllers/CreatePostController ";
import { CreateUserController } from "./controllers/CreateUserController";

const createUserController = new CreateUserController();
const createPostController = new CreatePostController

const routes = Router();

routes.post("/create", createUserController.handle );
routes.get("/index", createUserController.index );
routes.put("/update", createPostController.update);


export { routes };
