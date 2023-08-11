const express = require('express');
const ideasRouter = express.Router();

const {
    createMeeting,
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
    deleteAllFromDatabase,
  } = require('./db.js');

// Get an array of all ideas
ideasRouter.get("/", (req, res, next) => {
    res.send(getAllFromDatabase("ideas"));
})

ideasRouter.post("/", (req, res, next) => {
    const newIdea = addToDatabase("ideas", req.body);
    res.status(201).send(newIdea);
})

ideasRouter.get("/:ideaId", (req, res, next) => {
    res.send(req.idea);
})

ideasRouter.put("/:ideaId", (req, res, next) => {
    let updatedIdea = updateInstanceInDatabase("ideas", req.body);
    res.send(updatedIdea);
})

ideasRouter.delete("/:ideaId", (req, res, next) => {
    let deletedIdea = deleteFromDatabasebyId("ideas", req.params.ideaId);
    if (deletedIdea) {
        res.status(204);
    } else {
        res.status(500);
    }
    res.send();
})

/*
Simple parameter handling middleware for the ideaId route
It simple checks if the requrested Id is valid and then sets the req.parameter to the idea object
It then either continues the code with next() or it returns next with an error thus starting the error middleware 
*/
ideasRouter.param("ideaId", (req, res, next, id) => {
    const ideaId = id;
    const idea = getFromDatabaseById('ideas', ideaId);
    if (idea) {
        req.idea = idea;
        next();
    } else {
        const err = new Error("Idea not found");
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
ideasRouter.use((err, req, res, next) => {
    const status = err.status || 500;
    res.status(status).send(err.message);
})

module.exports = ideasRouter;