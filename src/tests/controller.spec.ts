import { getByIdController } from "../controller";
jest.mock("pg-promise", () => ({
    __esModule:true,
    default: jest.fn().mockReturnValue(jest.fn().mockReturnValue({
        none: jest.fn(),
        one: jest.fn().mockReturnValue("test"),
    }))
}))

describe("controller tests", () => {
    const req = {
        params: {
            id: "test"
        }
    }
    const res = {
        json: jest.fn()
    }
    it("should return data", async () => {
        await getByIdController(req, res, ()=>{})
        expect(res.json).toHaveBeenCalledWith("test")
    })
})