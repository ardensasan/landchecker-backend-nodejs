
import postgreClient from "./postgre"
const getByIdController = async (req, res, next) => {
    try {
        const result = await postgreClient().getDataByid(req.params.id)
        return res.json({ result })
    } catch (error) {
        next(error)
    }
}

const wildcardPathController = (req, res) => {
    return res.status(404).json({
        message: "Resource not found"
    })
}

export {
    getByIdController,
    wildcardPathController
}