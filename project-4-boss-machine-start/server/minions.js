const express = require('express');
const minionsRouter = express.Router();

const {
    createMeeting,
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
    deleteAllFromDatabase,
  } = require('./db');

// Get an array of all minions
minionsRouter.get("/", (req, res, next) => {
    res.send(getAllFromDatabase("minions"));
})

minionsRouter.get("/:minionId", (req, res, next) => {
    res.send(req.minion);
})

minionsRouter.put("/:minionId", (req, res, next) => {
    let minionUpdate = updateInstanceInDatabase('minions', req.body);
    res.send(minionUpdate);
})

minionsRouter.delete("/:minionId", (req, res, next) => {
    const deletedMinion = deleteFromDatabasebyId('minions', req.params.minionId);
    if (deletedMinion) {
        res.status(204);
    } else {
        res.status(500);
    }
    res.send();
})

/*
Simple parameter handling middleware for the miniondId route
It simple checks if the requrested Id is valid and then sets the req.parameter to the minion object
It then either continues the code with next() or it returns next with an error thus starting the error middleware 
*/
minionsRouter.param("minionId", (req, res, next, id) => {
    const minionId = id;
    const minion = getFromDatabaseById('minions', minionId);
    if (minion) {
        req.minion = minion;
        next();
    } else {
        const err = new Error("Minion not found");
        err.status = 404;
        return next(err);
    }
})

/* 
Simple error middleware.
To use create a new error object with an error message string as a paramter like so:
const errorVariableName = new Error('error message')
Set err.status to whatever status code you want
Then return next(errorVariableName)
*/
minionsRouter.use((err, req, res, next) => {
    const status = err.status || 500;
    res.status(status).send(err.message);
})

module.exports = minionsRouter;