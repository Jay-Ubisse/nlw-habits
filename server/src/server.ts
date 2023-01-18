import Fastify from "fastify";
import Cors from "@fastify/cors";
import { PrismaClient } from "@prisma/client";

const app = Fastify();
const prisma = new PrismaClient();
app.register(Cors);

app.get('/home', async () => {
    const habits = await prisma.habits.findMany({
        where: {
            title: {
                contains: "Beber"
            }
        }
    })

    return habits;
})

app.listen({
    port: 3333
}).then(() => {
    console.log("Server Running...");
})