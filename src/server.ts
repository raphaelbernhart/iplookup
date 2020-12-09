import express, { Application, Request, Response, Router } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
dotenv.config()

// Helper
import Logger from './helper/logging'

const app: Application = express()

// Config App
app.set(
    'trust proxy', true
)

// Middleware
app.use(
    bodyParser.json(),
    cors(),
    express.json(),
)

// Router
import ipLookup from './routes/ipLookup'

const router: Router = express.Router()

// Routes
app.get("/", ipLookup);

// Routes Error
app.get("*", (req: Request, res: Response) => {
    const status: number = 400;

    res.status(status).json({
        error: {
            status: status,
            message: "Route was not found"
        }
    });
})

const port = process.env.PORT ? process.env.PORT : 5000;

app.listen(port, () => {
    Logger.success(`IPLookup(${process.env.npm_package_version}) started on port ${port}`);
});