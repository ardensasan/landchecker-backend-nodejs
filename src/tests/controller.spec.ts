import sample from './sample.json'
const mockOneFunction = jest.fn()
import { getByIdController, wildcardPathController } from "../controller";
jest.mock("pg-promise", () => ({
    __esModule:true,
    default: jest.fn().mockReturnValue(jest.fn().mockReturnValue({
        none: jest.fn(),
        one: mockOneFunction,
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
    it("should return data", async () => {
        mockOneFunction.mockReset();
        mockOneFunction.mockReturnValue(sample)
        await getByIdController(req, res, ()=>{})
        expect(res.json).toHaveBeenCalledWith({
            result: sample
        })
    })

    it("should return an error when id doesnt exist in the table", async () => {
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
        await getByIdController(req, res, next)
        expect(next).toHaveBeenCalledWith(error)
    })

    it("should return an error for any other problems encountered", async () => {
        const error = new Error("Error")
        mockOneFunction.mockReset();
        mockOneFunction.mockImplementation(jest.fn(() => {
            throw error
        }))
        await getByIdController(req, res, next)
        expect(next).toHaveBeenCalledWith(error)
    })

    it("should return an 404 for wildcard controller", async () => {
        await wildcardPathController(req, res);
        expect(res.json).toHaveBeenCalled()
    })
})