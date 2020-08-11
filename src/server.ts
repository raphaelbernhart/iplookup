import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

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

const router = express.Router()

// Routes
app.use("/", ipLookup)

const port = process.env.PORT

if(process.env.NODE_ENV == "development") {
    console.log("\x1b[36m\x1b[4mDEVELOPMENT MODE");
    app.listen(port, () => console.log(`\x1b[33m\x1b[4mServer succesfully started on port ${port}\x1b[0m`));
}
else if(process.env.NODE_ENV == "production") {
    app.listen(port, () => console.log(`\x1b[32m` + "[IPL] " + `Production Server started on port ${port}\x1b[0m`));
}