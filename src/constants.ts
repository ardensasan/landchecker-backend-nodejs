import { object, number } from 'yup';
const TABLE_NAME = 'public.vic_lga'
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
    GET_LIST_SCHEMA
}