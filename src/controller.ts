
import postgreClient from "./postgre"
import properties from './properties.json'
const getLGAByIdController = async (req, res, next) => {
    try {
        const result = await postgreClient().getDataByid(req.params.id)
        return res.json({ result })
    } catch (error) {
        next(error)
    }
}

const getLGAListController = async (req, res, next) => {
    try {
        const page = (req.query?.page || 0)
        const limit = 10;
        const result = await postgreClient().getLGAList(page, limit)
        return res.json({ result })
    } catch (error) {
        next(error)
    }
}

const getPropertyByIdController = async (req, res, next) => {
    try {
        const result = properties.find(({ property_id }: any) => property_id === Number(req.params.id));
        if (!result) {
            throw {
                statusCode: 400,
                message: `No such property with id ${req.params.id}`
            }
        }
        return res.json({ result })
    } catch (error) {
        next(error)
    }
}

const getPropertiesListController = async (req, res, next) => {
    return res.json({ result: properties })
}

const wildcardPathController = (req, res) => {
    return res.status(404).json({
        message: "Resource not found"
    })
}

export {
    getLGAByIdController,
    getLGAListController,
    getPropertiesListController,
    getPropertyByIdController,
    wildcardPathController
}