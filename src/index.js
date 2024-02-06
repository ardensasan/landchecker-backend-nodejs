import express from "express"
import { errorCatcher } from "./middlewares.js";
import { getById } from "./controller.js";
const app = express();
const port = 3000;


app.get('/lgas/:id', getById)

app.all('*', (req, res) => {
    return res.status(404).json({
        message: "Resource not found"
    })
})
app.use(errorCatcher)

app.listen(port, () => {
    console.log(`Server is listenning on http://localhost:${port}/`)
})