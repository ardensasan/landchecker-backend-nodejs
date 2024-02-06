const errorCatcher = (error, req, res, next) => {
    const { statusCode = 500 , message = "" } = error; 
    return res.status(statusCode).json({
        error: message
    }).end()
}


export {
    errorCatcher
}