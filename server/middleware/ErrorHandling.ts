import {NextFunction, Request, Response } from "express";

export const ErrorHandle = (err: Error, req: Request, res: Response) => {
    console.log("Error caught in ErrorHandle middleware:", err);

    const statusCode = res.statusCode ? res.statusCode : 500;
    console.log("🚀 ~ ErrorHandle ~ statusCode:", statusCode)
    switch (statusCode) {
        case 401:
            res.send({
                title: 'Unauthorized',
                message: err.message
            });
            break;
        case 403:
            res.send({
                title: 'Forbidden',
                message: err.message
            });
            break;
        case 404:
            console.log("Error handle 404");
            res.status(404).send({
                title: 'Not Found',
                message: err.message
            });
                console.log("🚀 ~ res.status ~ err.message:", err.message)
            break;
        case 500:
            res.send({
                title: 'Server Error',
                message: err.message
            });
            break;
        default:
            // Handle other cases with a default response
            res.send({
                title: 'Unexpected Error',
                message: 'An unexpected error occurred'
            });
            break;
    }
};

