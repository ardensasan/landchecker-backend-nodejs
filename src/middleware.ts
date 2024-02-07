import { NextFunction } from "express";

const errorCatcher = (error, req, res, next) => {
    const { statusCode = 500, message = "Error Encountered" } = error;
    return res.status(statusCode).json({
        error: message
    }).end()
}

const requestParamsValidator = (schema) => {
    return async (req, res, next: NextFunction) => {
        try {
            await schema.validate(req.params);
            next();
        } catch (error) {
            error.statusCode = 404
            next(error)
        }
    }
}

const requestQueryValidator = (schema) => {
    return async (req, res, next: NextFunction) => {
        try {
            await schema.validate(req.query);
            next();
        } catch (error) {
            error.statusCode = 404
            next(error)
        }
    }
}

export {
    errorCatcher,
    requestParamsValidator,
    requestQueryValidator
}