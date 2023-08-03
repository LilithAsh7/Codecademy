const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.listen(PORT, () => {})

app.get("/api/quotes/random", (req, res) => {
    gottenQuote = getRandomElement(quotes)
    //console.log(gottenQuote)
    res.send({
        quote: gottenQuote
    })
})

app.get("/api/quotes", (req, res) => {
    const queryString = req.query.person
    if(queryString){
        const authorQuotes = quotes.filter(quote => quote.person === req.query.person);
        //const authorQuotes = getQuotesByAuthor(queryString, quotes)
        res.send({
            quotes: authorQuotes
        })
    } else {
        res.send({quotes: quotes})
    }
})

app.post("/api/quotes", (req, res) => {
    if(req.query.person !== undefined && req.query.quote !== undefined){
        newElement = {quote: req.query.quote, person: req.query.person}
        quotes.push(newElement)
        res.status(201).send({quote: newElement})
    } else {
        res.status(400).send()
    }
})

function getQuotesByAuthor(author, array){
    console.log("Starting getQuotesByAuthor")
    let authorQuotes = []
    for(i = 0; i < array.length; i++){
        if (array[i].person === author){
            authorQuotes.push(array[i].quote)
        }
    }
    console.log("Inside getQuotesByAuthor", authorQuotes)
    return authorQuotes
}