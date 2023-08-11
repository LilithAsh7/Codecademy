const express = require('express');
const meetingsRouter = express.Router();

const {
    createMeeting,
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
    deleteAllFromDatabase,
  } = require('./db.js')

meetingsRouter.get("/", (req, res, next) => {
    res.send(getAllFromDatabase("meetings"));
})

meetingsRouter.post("/", (req, res, next) => {
    const newMeeting = addToDatabase("meetings", createMeeting());
    res.status(201).send(newMeeting);
})

meetingsRouter.delete("/", (req, res, next) => {
    deleteAllFromDatabase("meetings");
    res.status(204).send()
})

/* 
Simple error middleware.
To use create a new error object with an error message string as a paramter like so:
const errorVariableName = new Error('error message')
Set err.status to whatever status code you want
Then return next(errorVariableName)
*/
meetingsRouter.use((err, req, res, next) => {
    const status = err.status || 500;
    res.status(status).send(err.message);
})

module.exports = meetingsRouter;