const express = require('express');
const envelopesRouter = express.Router();

const   {
        addNewCategory, 
        getAllFromDatabase, 
        getFromDatabaseByCategory, 
        updateDatabase, 
        deleteFromDatabase
        } = require("./db.js")

envelopesRouter.get("/", (req, res, next) => {
    const database = getAllFromDatabase()
    res.send(database)
})

envelopesRouter.post("/", (req, res, next) => {
    const category = req.body.category
    const newEnv = addNewCategory(category);
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

envelopesRouter.put("/:category", (req, res, next) => {
    const categoryUpdate = req.body.category
    const amountUpdate = req.body.amount
    const finalUpdate = updateDatabase(req.envelopeId, categoryUpdate, amountUpdate)
    res.send(finalUpdate)
})

envelopesRouter.delete("/:category", (req, res, next) => {
    const deletedEnvelope = deleteFromDatabase(req.envelopeId);
    if (deletedEnvelope) {
        res.status(204);
    } else {
        res.status(500);
    }
    res.send(deletedEnvelope);
})

envelopesRouter.param("category", (req, res, next, category) => {
    const categoryToFind = category;
    const envelopeData = getFromDatabaseByCategory(categoryToFind);
    const envelope = envelopeData[0];
    const envelopeId = envelopeData[1];
    if (envelope) {
        req.envelope = envelope;
        req.envelopeId = envelopeId;
        next();
    } else {
        const err = new Error("Category not found");
        err.status = 404;
        return next(err);
    }
})

module.exports = envelopesRouter;