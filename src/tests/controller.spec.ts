import sample from './sample.json'
import properties from '../properties.json'
const mockOneFunction = jest.fn()
const mockAnyFunction = jest.fn()
import { getLGAByIdController, getLGAListController, getPropertiesListController, getPropertyByIdController, wildcardPathController } from "../controller";
jest.mock("pg-promise", () => ({
    __esModule: true,
    default: jest.fn().mockReturnValue(jest.fn().mockReturnValue({
        one: mockOneFunction,
        any: mockAnyFunction,
    }))
}))

describe("controller tests", () => {
    const req = {
        params: {
            id: 1
        }
    }
    const res = {
        status: jest.fn().mockReturnValue({
            json: jest.fn()
        }),
        json: jest.fn()
    }
    const next = jest.fn()
    it("should return lga data when id exists", async () => {
        const req = {
            params: {
                id: 1
            }
        }
        mockOneFunction.mockReset();
        mockOneFunction.mockReturnValue(sample)
        await getLGAByIdController(req, res, () => { })
        expect(res.json).toHaveBeenCalledWith({
            result: sample
        })
    })

    it("should return a paged list of lgas", async () => {
        const req = {
            query: {
                page: 2
            }
        }
        mockAnyFunction.mockReset();
        mockAnyFunction.mockReturnValue([sample])
        await getLGAListController(req, res, next)
        expect(res.json).toHaveBeenCalledWith({
            result: [sample]
        })
    })

    it("should throw when an error is encountered on the database", async () => {
        const error = new Error("Error")
        mockAnyFunction.mockReset();
        mockAnyFunction.mockImplementation(jest.fn(() => {
            throw error
        }))
        await getLGAListController(req, res, next)
        expect(next).toHaveBeenCalledWith(error)
    })

    it("should return an error when lga id doesnt exist in the table", async () => {
        const error = new Error("No data returned from the query.")
        mockOneFunction.mockReset();
        mockOneFunction.mockImplementation(jest.fn(() => {
            throw error
        }))
        const req = {
            params: {
                id: 1
            }
        }
        const res = {
            json: jest.fn()
        }
        await getLGAByIdController(req, res, next)
        expect(next).toHaveBeenCalledWith(error)
    })

    it("should return an error when lga id doesnt exist in the table", async () => {
        const error = new Error("No data returned from the query.")
        mockOneFunction.mockReset();
        mockOneFunction.mockImplementation(jest.fn(() => {
            throw error
        }))
        const req = {
            params: {
                id: 1
            }
        }
        const res = {
            json: jest.fn()
        }
        try {

        } catch (error) {

        }
        await getLGAByIdController(req, res, next)
        expect(next).toHaveBeenCalledWith(error)
    })

    it("should return an error for any other problems encountered", async () => {
        const error = new Error("Error")
        mockOneFunction.mockReset();
        mockOneFunction.mockImplementation(jest.fn(() => {
            throw error
        }))
        await getLGAByIdController(req, res, next)
        expect(next).toHaveBeenCalledWith(error)
    })

    it("should return property data when property_id exists", async () => {
        const req = {
            params: {
                id: 1525674
            }
        }
        await getPropertyByIdController(req, res, next)
        expect(res.json).toHaveBeenCalled()
    })

    it("should throw an error when property_id doesnt exist", async () => {
        const req = {
            params: {
                id: 12314151
            }
        }
        await getPropertyByIdController(req, res, next);
        expect(next).toHaveBeenCalledWith({
            statusCode: 400,
            message: `No such property with id ${12314151}`
        })
    })

    it("should get the list of properties", async () => {
        await getPropertiesListController(req, res, next);
        expect(res.json).toHaveBeenCalledWith({
            result: properties
        })
    })

    it("should return an 404 for wildcard controller", async () => {
        await wildcardPathController(req, res);
        expect(res.json).toHaveBeenCalled()
    })
})