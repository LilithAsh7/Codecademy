const express = require('express');
const envelopesRouter = express.Router();

const {addNewCategory, getAllFromDatabase} = require("./db.js")

envelopesRouter.get("/", (req, res, next) => {
    const database = getAllFromDatabase()
    res.send(database)
})

envelopesRouter.post("/", (req, res, next) => {
    const body = req.body
    console.log(body)
    const newEnv = addNewCategory(body.category);
    res.status(201).send(newEnv);
})

module.exports = envelopesRouter;