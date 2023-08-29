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
    
    let i = 0

    while(i < envDb.length){
        if(envDb[i].category == lookUpCategory){
            return(envDb[i])
        }
        i++;
    }
}

module.exports = {
    addNewCategory,
    getAllFromDatabase,
    getFromDatabaseByCategory
}