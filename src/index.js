import express from "express"
import { errorCatcher, requestParamsValidator } from "./middlewares.js";
import { getByIdController, wildcardPathController } from "./controller.js";
import { GET_BY_ID_SCHEMA } from "./constants.js";
GET_BY_ID_SCHEMA
const app = express();
const port = 3000;


app.get('/lgas/:id', requestParamsValidator(GET_BY_ID_SCHEMA), getByIdController)
app.all('*', wildcardPathController)
app.use(errorCatcher)

app.listen(port, () => {
    console.log(`Server is listenning on http://localhost:${port}/`)
})