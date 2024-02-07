import pgPromise from "pg-promise"
import { DATABASE_CREDENTIALS, TABLE_NAME } from "../constants";
let db = null;
const postgreClient = () => {
    if (!db) {
        const pgp = pgPromise()
        db = pgp(DATABASE_CREDENTIALS);
    }

    const getDataByid = async (id: any) => {
        const query = {
            text: `SELECT * FROM ${TABLE_NAME} WHERE gid = $1`,
            values: [id],
        }
        try {
            const result = await db.one(query)
            return result
        } catch (error) {
            if (error.message == "No data returned from the query.") {
                error.message = `No such lga with id ${id}`
                error.statusCode = 404
                throw error
            }
            throw error
        }
    }

    const getLGAList = async (page: any, limit: any) => {
        let offset = 0
        try {
            if (page !== '1' && page) {
                offset = (page - 1) * limit
            }
            const query = {
                text: `SELECT * FROM ${TABLE_NAME} ORDER BY gid ASC  OFFSET $1 LIMIT $2 `,
                values: [offset, limit],
            }
            const result = await db.any(query)
            return result
        } catch (error) {
            throw error
        }
    }

    return {
        getLGAList,
        getDataByid,
    }
}

export default postgreClient;