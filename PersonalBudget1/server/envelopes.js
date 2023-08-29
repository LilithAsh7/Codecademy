const express = require('express');
const envelopesRouter = express.Router();

const {addNewCategory, getAllFromDatabase, getFromDatabaseByCategory} = require("./db.js")

envelopesRouter.get("/", (req, res, next) => {
    const database = getAllFromDatabase()
    res.send(database)
})

envelopesRouter.post("/", (req, res, next) => {
    const body = req.body.category
    const newEnv = addNewCategory(body);
    res.status(201).send(newEnv);
})

/* THIS IS AN OPTIONAL VERSION OF THE ABOVE POST REQUEST THAT USES REQ.QUERY INSTEAD OF REQ.BODY
envelopesRouter.post("/", (req, res, next) => {
    const body = req.query.category
    console.log(body)
    const newEnv = addNewCategory(body);
    res.status(201).json(newEnv);
})
*/

envelopesRouter.get("/:category", (req, res, next) => {
    
    res.send(req.envelope);
})

envelopesRouter.param("category", (req, res, next, category) => {
    const categoryToFind = category;
    const envelope = getFromDatabaseByCategory(categoryToFind);
    if (envelope) {
        req.envelope = envelope;
        next();
    } else {
        const err = new Error("Category not found");
        err.status = 404;
        return next(err);
    }
})

module.exports = envelopesRouter;