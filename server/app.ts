import express from "express";
import * as dotenv from 'dotenv';
import { ErrorHandle } from "./middleware/ErrorHandling";
import { eventRouter } from "./routes/event";
import helmet from 'helmet';
import cors from 'cors';
import logger from "./logger";

const app = express();
dotenv.config();
app.use(cors());
app.use(helmet()); 
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins (you might want to restrict this in a production environment)
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', 'true'); // Enable credentials (cookies, authorization headers, etc.)
    next();
  });

app.use((req, res, next) => {
    logger.info(`${req.method} ${req.url}`);
    next();
});
const port = process.env.PORT || '7007';


app.use('/',eventRouter)
app.use(ErrorHandle)
app.listen(port, () => { 
    console.log("🚀 ~ Server is running on http://localhost:", port);
});