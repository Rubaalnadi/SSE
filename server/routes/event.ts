import  express  from "express";
import { eventMiddleWare } from "../controller/event";

const eventRouter =  express.Router()


eventRouter.get('/event',eventMiddleWare)


export {eventRouter}