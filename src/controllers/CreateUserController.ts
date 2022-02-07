import { Request, Response } from "express";
import { CreateUserService } from "../service/CreateUserService"


class CreateUserController {
    async handle(req: Request, res: Response): Promise<Response> {
        const service = new CreateUserService();
        try {
            const data = await service.create();

            console.log(data);
            return res.json(data);
        } catch (error) {
            return res.json({Error: error});
        }
    }

    async index (req: Request, res: Response): Promise<Response> {
        const service = new CreateUserService();
        try {
            const data = await service.all()

            console.log(data);
            return res.json(data);
        } catch (error) {
            return res.json({Error: error});
        }

    }
} 

export { CreateUserController }