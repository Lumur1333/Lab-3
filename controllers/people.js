const people = require('../people.json');

exports.index = (_, res) => {
    console.log(people);
    res.status(200).json([
        {
            path: '/person',
            description: 'Returns the first 100 characters in the database'
        },
        {
            path: '/person/search/:name',
            description: 'Returns a list of peoples names who start with that letter'
        },
        {
            path: '/person/:id',
            description: 'Returns the person with the specified ID'
        }
    ]);
};

exports.show = async (_, res, next) => {
    try{  
        res.status(200).json(people);
    }catch (error){
        next(error);
    }
};

exports.here = async (_, res, next) => {
    try {
        
        res.status(200).json(People);
    } catch (error){
        next(error);
    }
};