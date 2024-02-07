import express from "express"
import route from "./route";
import { errorCatcher } from "./middleware";
const app = express();
const port = 3000;
app.use(route)
app.use(errorCatcher)
app.listen(port, () => {
    console.log(`Server is listenning on http://localhost:${port}/`)
})