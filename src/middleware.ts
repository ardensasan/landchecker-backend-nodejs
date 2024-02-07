const errorCatcher = (error, req, res, next) => {
    const { statusCode = 500, message = "" } = error;
    return res.status(statusCode).json({
        error: message
    }).end()
}

const requestParamsValidator = (schema) => {
    return async (req, res, next) => {
        try {
            await schema.validate(req.params);
            next();
        } catch (error) {
            next(error)
        }
    }
}

const requestQueryValidator = (schema) => {
    return async (req, res, next) => {
        try {
            await schema.validate(req.query);
            next();
        } catch (error) {
            next(error)
        }
    }
}

export {
    errorCatcher,
    requestParamsValidator,
    requestQueryValidator
}