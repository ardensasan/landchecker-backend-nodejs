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
    id: number("Id is not a valid integer").integer("Id is not a valid integer").typeError("Id is not a valid integer").min(0, "Id is not a valid integer").required(),
});

export {
    TABLE_NAME,
    DATABASE_CREDENTIALS,
    GET_BY_ID_SCHEMA
}