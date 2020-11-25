const People = require('../models/person');

exports.index = async (req, res, next) => {
    try {
        const peoples = await People.find();
        res.status(200).json(peoples);
    } catch (error) {
        next(error);
    }
};

exports.show = async (req, res, next) => {
    try {
        const peoples = await People.findById(req.params.id);
        res.status(200).json(peoples);
    } catch (error){
        next(error);
    }
};

exports.index = (_, res) => {
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