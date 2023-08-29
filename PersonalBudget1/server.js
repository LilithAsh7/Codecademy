const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const bodyParser = require("body-parser")
app.use(bodyParser.json())

app.get("/", (req, res, next) => {
    res.send("Hello, World");
})

const apiRouter = require('./server/api');
app.use("/api", apiRouter)

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});