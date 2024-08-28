import { PrismaClient } from "@prisma/client"
// import {  ProductAggregateArgsSchema,  } from "@/prisma/generated/zod";

const prisma = new PrismaClient();

export async function GET() {
    const products = await prisma.product.findMany();
    console.log(products);

    return Response.json({products})
}

export async function POST() {
    try {
        await prisma.product.create({
            data: {
                name: "RTX",
                price: 1000,
                description: "rtx with intel colab",
                key: "nothing special"
            }
        })
        return Response.json({message: "product created"})
    } catch(e) {
        console.log(e);

        return Response.json({error: e})
    }
}
