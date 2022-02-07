import { Request, Response } from "express";
import { prisma } from "../database"



class CreateUserService {
    async create () {
        const data = await prisma.user.create({
            data: {
                name: 'Jeferson',
                email: 'jeferson@prisma.io',
                posts: {
                    create: { title: 'Teste Prisma' },
                },
                prifile: {
                    create: { bio: 'I like Development'}
                },
            }
        });

        if(!data){
            throw new Error("Crate fail");
        }

        return data;
    }

    async all (){
        const data = await prisma.user.findMany({
            include: {
                posts: true,
                prifile: true,
            }
        });

        if(!data){
            throw new Error("Not found");
        }

        return data;
    }

    async update () {
        const data = await prisma.post.update({
            where: { id: 1 },
            data: { published: true },
        });

        if(!data){
            throw new Error("Updated fail");
        }

        return data;

    }
}

export { CreateUserService };