import {PrismaClient} from "@prisma/client"
import {notFound} from "./middleware/not-found";
import express from 'express'
import userRouter from "./routes/user";

const app = express()
const prisma = new PrismaClient()


app.use(express.json())
app.use(notFound)
app.use("/",userRouter)

const port = process.env.PORT || 3000

const start_server = async () => {
    try {
        await prisma.$connect();
        console.log("Connected to the database");

        app.listen(port, () => {
            console.log(`The server is listening on localhost:${port}`)
            console.log("Happy coding 😄")
        })
    } catch (e) {
        console.error("Error connecting to the database: ", e);
        process.exit(1)
    }
}

start_server()