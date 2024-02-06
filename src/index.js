const app = express();
const port = 3000;
app.get('/lgas/:id', async (req, res) => {
    return res.json({
        result: "test"
    })
})

app.all('*', (req, res) => {
    return res.status(404).json({
        message: "Resource not found"
    })
})
app.listen(port, () => {
    console.log(`Server is listenning on http://localhost:${port}/`)
})