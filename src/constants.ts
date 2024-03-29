import { object, number } from 'yup'
const DATABASE_CREDENTIALS = {
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    user: 'postgres',
    password: 'admin',
}
const TABLE_NAME = 'public.vic_lga'
const CSV_FILE_PATH = './src/data/ABS_ERP_COMP_LGA2022_1.0.0.csv'
const GET_BY_ID_SCHEMA = object({
    id: number().integer("Id is not a valid integer").typeError("Id is not a valid integer").min(0, "Id is not a valid integer").required(),
});
const GET_LIST_SCHEMA = object({
    page: number().integer("page is not a valid integer").typeError("page is not a valid integer").min(1, "page number must be greater than 0"),
});
export {
    TABLE_NAME,
    DATABASE_CREDENTIALS,
    GET_BY_ID_SCHEMA,
    GET_LIST_SCHEMA,
    CSV_FILE_PATH
}