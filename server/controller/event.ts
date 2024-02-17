import { Request, Response } from "express"


const eventMiddleWare = (req:Request , res : Response) => {
    
        res.writeHead(200, {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive'
        });
    
        setInterval(() => {
            res.write(`data: ${JSON.stringify({ message: 'Hello from server' })}\n\n`);
        }, 1000);
    
}

export{eventMiddleWare}