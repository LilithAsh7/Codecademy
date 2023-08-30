const envDb = [
    {   
        "category": "diningOut",
        "amount": 0
    },
    {   
        "category": "groceries",
        "amount": 0
    },
    {   
        "category": "fun",
        "amount": 0
    },
    {   
        "category": "gas",
        "amount": 0
    }
]

const getAllFromDatabase = () => {
    return envDb
}

const addNewCategory = (newCategory) => {
    toAdd = {
                "category": newCategory,
                "amount": 0
            }
    envDb.push(toAdd);
    return(toAdd)
}

const getFromDatabaseByCategory = (lookUpCategory) => {
    let i = 0;

    while(i < envDb.length){
        if(envDb[i].category == lookUpCategory){
            return[envDb[i], i];
        }
        i++;
    }
}

const updateDatabase = (envelopeId, categoryUpdate, amount) => {
    envelopeToUpdate = envDb[envelopeId]
    if(!categoryUpdate){
        envelopeToUpdate.amount += amount;
        return(envelopeToUpdate);
    } else if(!amount){
        envelopeToUpdate.category = categoryUpdate;
        return(envelopeToUpdate);
    } else {
        envelopeToUpdate.amount += amount;
        envelopeToUpdate.category = categoryUpdate;
        return(envelopeToUpdate);
    }
}

const deleteFromDatabase = (envelopeId) => {
    envelopeToDelete = envDb[envelopeId]
    envDb.splice(envelopeId, 1);
    return(envelopeToDelete)
}

module.exports = {
    addNewCategory,
    getAllFromDatabase,
    getFromDatabaseByCategory,
    updateDatabase,
    deleteFromDatabase
}