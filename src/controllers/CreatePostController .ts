import { Request, Response } from "express";
import { CreateUserService } from "../service/CreateUserService"


class CreatePostController {
    async update (req: Request, res: Response): Promise<Response> {
        const service = new CreateUserService();
        try {
            const data = await service.update();

            console.log(data);
            return res.json(data);
        } catch (error) {
            return res.json({Error: error});
        }
    }

    
}

export { CreatePostController }