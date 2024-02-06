import pgPromise from "pg-promise"
let db = null;
const postgreClient = () => {
    if (!db) {
        const pgp = pgPromise()
        db = pgp({
            host: 'localhost',
            port: 5432,
            database: 'postgres',
            user: 'postgres',
            password: 'admin',
        });
    }

   const getDataByid = async (id = 1, page = 1) => {
    const query = {
        text: 'SELECT * FROM public.vic_lga WHERE gid = $1',
        values: [id],
        }
        try {
            const result = await db.one(query)
            return result
        } catch (error) {
            console.log(error.message)
            if(error.message == "No data returned from the query.") {
                error.statusCode = 404
                throw error
            }
            console.log(JSON.stringify(error))   
        }
    }

    return {
        getDataByid,
    }
}

export default postgreClient;