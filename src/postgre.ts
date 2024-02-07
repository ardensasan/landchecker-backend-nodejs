import pgPromise from "pg-promise"
import { DATABASE_CREDENTIALS, TABLE_NAME } from "./constants";
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
            if(error.message == "No data returned from the query.") {
                error.statusCode = 404
                throw error
            }
            throw error
        }
    }

    return {
        getDataByid,
    }
}

export default postgreClient;