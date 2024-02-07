import { object, number } from 'yup'
const TABLE_NAME = 'public.vic_lga'
const CSV_FILE_PATH = './src/data/ABS_ERP_COMP_LGA2022_1.0.0.csv'
const DATABASE_CREDENTIALS = {
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    user: 'postgres',
    password: 'admin',
}

const GET_BY_ID_SCHEMA = object({
    id: number().integer("Id is not a valid integer").typeError("Id is not a valid integer").min(0, "Id is not a valid integer").required(),
});

const GET_LIST_SCHEMA = object({
    page: number().integer("page is not a valid integer").typeError("page is not a valid integer").min(0, "page is not a valid integer"),
});
export {
    TABLE_NAME,
    DATABASE_CREDENTIALS,
    GET_BY_ID_SCHEMA,
    GET_LIST_SCHEMA,
    CSV_FILE_PATH
}