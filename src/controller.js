
import postgreClient from "./postgre.js"
const getById = async (req, res, next) => {
    try {
        const result = await postgreClient().getDataByid(req.params?.id)
    } catch (error) {
        next(error)
    }
}

export {
    getById
}