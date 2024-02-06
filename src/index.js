import express from "express"
import { errorCatcher } from "./middlewares.js";
import { getByIdController, wildcardPathController } from "./controller.js";
const app = express();
const port = 3000;


app.get('/lgas/:id', getByIdController)
app.all('*', wildcardPathController)
app.use(errorCatcher)

app.listen(port, () => {
    console.log(`Server is listenning on http://localhost:${port}/`)
})