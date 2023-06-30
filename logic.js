function randomMessage(){
    //const messageFunctions = [randomAdLib, randomOminousMessage, randomJoke]
    const messageFunctions = [randomOminousMessage]
    return getRandomElement(messageFunctions)();
}

function randomAdLib(){
    const singularNouns = ["fish", "elephant", "boy", "girl", "berson", "banana", "tent pole", "grinkle-snout", "geometric horror"]
    const singularNoun1 = getRandomElement(singularNouns)
    const singularNoun2 = getRandomElement(singularNouns)
    const foods = ["pizza", "soup", "human flesh", "nonhuman flesh", "radioactive waste", "leather", "ice cream", "grinkle-snout boogers"]
    const food = getRandomElement(foods)
    const locations = ["ocean", "forest", "jungle", "cave", "isometric prison", "radioactive wasteland", "teeny tiny little bikini"]
    const location = getRandomElement(locations)
    const thingys = ["water bottle", "tea cup", "tissue", "man named George", "action figure of Cell from Dragon Ball Z", "stapler", "really good book"]
    const thingy = getRandomElement(thingys)
    const appendages = ["tentacle", "fuzzy paw", "scaley tail", "fleshy tail", "tusk", "giant ear", "tiny ear", "grinkle-snout snout", "cigarette tied to a string"]
    const appendage = getRandomElement(appendages)
    const monsterNames = ["Drax", "Carmichael", "Carmine Falcone", "John", "Jeremiah", "Sally", "Ignothrial", "Nyarlethotep", "Cthulhu", "Shoggoth"]
    const monsterName = getRandomElement(monsterNames)
    const verbEds = ["croaked", "slurped", "jumped", "drove", "ribbed", "slept", "camped", "cried"]
    const verbEd = getRandomElement(verbEds)
    const verbIngs = ["crying", "sleeping", "running", "scoping out the place", "playing video games", "grinding down some metal for forging"]
    const verbIng = getRandomElement(verbIngs)
    const adverbs = ["quickly", "lazily", "sharply", "incredibly", "ignorantly", "rapidly", "slowly", "rustically"]
    const adverb = getRandomElement(adverbs)
    const dates = ["May", "June", "December", "Octover", "1969", "the good old days", "that one time when my uncle was in jail for that thing he didn't do but that you and I definitely did."]
    const date = getRandomElement(dates)

    const message = `There once was a ${singularNoun1} who ate too much ${food}. 
They found themselves in a ${location} with nothing but a ${thingy}. 
While trying to find their way out, the ${singularNoun1} felt a ${appendage} touch them on their shoulder.They whipped around and saw ${monsterName} behind them.
"Hi!" ${monsterName} said. "How are you doing today? Weird to see a ${singularNoun1} here. 
The ${singularNoun1} replied "Don't you remember me? We ${verbEd} beside each other back in ${date}."
The creature flipped it's ${appendage} one more time and said "How could I remember you. You and I are the same ${singularNoun1}."
Then the mirror shattered and revealed a ${singularNoun2} enjoying an afternoon of ${adverb} ${verbIng}.
Behind them sat their ${thingy}, which watched peacefully and ate ${food}.`
    console.log(message)
    return message
}

function randomOminousMessage(){
    console.log("Ominous function starting")
    let num = Math.floor(Math.random() * 5)
    while (num === 0 || num === 1){
        num = Math.floor(Math.random() * 5)
    }
    const portants = ["white bird", "brown feather", "grotesque mockery of your life", "faint echo", "death", "birth", "seeker of knowledge"]
    const portant = getRandomElement(portants)
    const badThingys = ["doom", "hellfire", "pain", "torture", "violence",  "darkness", "fear", "hatred", "depravity", "degradation", "chaos", "spaghettification", "anger", "dissociation", "anxiety", "unbridled anarchy"]
    let badThingy1 = getRandomElement(badThingys)
    let badThingy2 = getRandomElement(badThingys)
    let badThingy3 = firstLetterUpperCase(getRandomElement(badThingys))

    while (badThingy1 === badThingy2 || badThingy1 === badThingy3 || badThingy2 === badThingy3){
        badThingy1 = getRandomElement(badThingys)
        badThingy2 = getRandomElement(badThingys)
        badThingy3 = firstLetterUpperCase(getRandomElement(badThingys))
    }

    message = `In ${num} weeks you will see a ${portant}. It will be a portant of iminent ${badThingy1}. ${badThingy3} will rain down in your world and you will know the true meaning of ${badThingy2}.`
    console.log(message)
    return message
}

function randomJoke(){
    console.log("Joke function starting") 
}

function getRandomElement(arr){
    return arr[Math.floor(Math.random() * arr.length)]
}

function firstLetterUpperCase(word){
    word = word.split("")
    word[0] = word[0].toUpperCase()
    word = word.join("")
    return word
}

randomMessage();