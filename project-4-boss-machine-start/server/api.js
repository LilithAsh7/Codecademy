const express = require('express');
const apiRouter = express.Router();

const {
    createMeeting,
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
    deleteAllFromDatabase,
  } = require('./db.js')

module.exports = apiRouter;

/* 
Simple error middleware.
To use create a new error object with an error message string as a paramter like so:
const errorVariableName = new Error('error message')
Set err.status to whatever status code you want
Then return next(errorVariableName) 
*/
app.use((err, req, res, next) => {
    const status = err.status || 500;
    res.status(status).send(err.message)
})

/*
Simple parameter handling middleware for the miniondId route and below it the ideaId route
It simple checks if the requrested Id is valid and then sets the req.parameter to the minion or id object
It then either continues the code with next() or it returns next with an error thus starting the error middleware 
*/
apiRouter.param("minionId", (req, res, next, id) => {
    const minionId = id
    const minion = getFromDatabaseById('minions', minionId)
    if (minion) {
        req.minion = minion
        next()
    } else {
        const err = new Error("Minion not found")
        err.status(404)
        return next(err)
    }
})

apiRouter.param("ideaId", (req, res, next, id) => {
    const ideaId = id
    const idea = getFromDatabaseById('ideas', ideaId)
    if (idea) {
        req.idea = idea
        next()
    } else {
        const err = new Error("Idea not found")
        err.status(404)
        return next(err)
    }
})