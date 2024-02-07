import { ValidationError } from "yup";
import { GET_BY_ID_SCHEMA, GET_LIST_SCHEMA } from "../constants";
import { errorCatcher, requestParamsValidator, requestQueryValidator } from "../middleware";
describe('middleware tests', () => {
    it('should throw a validation error when id is not a valid integer', async () => {
        const req = {
            params: {
                id: "test"
            }
        }
        const error = new ValidationError("Id is not a valid integer")
        const res = jest.fn()
        const next = jest.fn()
        await requestParamsValidator(GET_BY_ID_SCHEMA)(req, res, next)
        expect(next).toHaveBeenCalledWith(error)
    })

    it('should return proceed to next step if id is valid', async () => {
        const req = {
            params: {
                id: 1
            }
        }
        const res = jest.fn()
        const next = jest.fn()
        await requestParamsValidator(GET_BY_ID_SCHEMA)(req, res, next)
        expect(next).toHaveBeenCalled()
    })

    it('should throw a validation error when id is not a valid integer', async () => {
        const req = {
            query: {
                page: "test"
            }
        }
        const res = jest.fn()
        const next = jest.fn()
        const error = new ValidationError("page is not a valid integer")
        await requestQueryValidator(GET_LIST_SCHEMA)(req, res, next)
        expect(next).toHaveBeenCalledWith(error)
    })

    it('should return proceed to next step if page is valid', async () => {
        const req = {
            query: {
                page: 2
            }
        }
        const res = jest.fn()
        const next = jest.fn()
        const error = new ValidationError("page is not a valid integer")
        await requestQueryValidator(GET_LIST_SCHEMA)(req, res, next)
        expect(next).toHaveBeenCalled()
    })

    it('should return status 500 for errors without status and message Error Encountered for errors without message', async () => {
        const req = jest.fn()
        const res = {
            status: jest.fn(() => res),
            json: jest.fn(() => res),
            end: jest.fn(() => res)
        }
        const next = jest.fn()
        await errorCatcher({}, req, res, next)
        expect(res.status).toHaveBeenCalledWith(500)
        expect(res.json).toHaveBeenCalledWith({
            error: "Error Encountered"
        })
    })

    it('should return status xxx for errors with status xxx and error message with message xxx', async () => {
        const req = jest.fn()
        const res = {
            status: jest.fn(() => res),
            json: jest.fn(() => res),
            end: jest.fn(() => res)
        }
        const next = jest.fn()
        await errorCatcher({
            statusCode: 400,
            message: "Validation Error"
        }, req, res, next)
        expect(res.status).toHaveBeenCalledWith(400)
        expect(res.json).toHaveBeenCalledWith({
            error: "Validation Error"
        })
    })
})