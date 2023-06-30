function randomMessage(){
    let messageFunctions = [randomAdLib, randomOminousMessage, randomJoke]
    return messageFunctions[Math.floor(Math.random() * messageFunctions.length)]();
}

function randomAdLib(){
    console.log("AdLib")
}

function randomOminousMessage(){
    console.log("Ominous")
}

function randomJoke(){
    console.log("Joke")
}

randomMessage();