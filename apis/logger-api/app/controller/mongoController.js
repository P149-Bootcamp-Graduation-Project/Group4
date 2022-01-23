const { mongo_client } = require('../db/db');

exports.getAll = async (req, res, next) => {
    try {
        const result = await mongo_client.db('test').collection('group4').find().toArray();
        res.json({data: result, code: "SUCCESS", timestamp: Date.now()}).status(200);
    } catch (error) {
        res.json({
            error: error.message,
            code: error.__proto__.name,
            timestamp: Date.now()
        }).status(500)
    }
}

exports.getOne = async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await mongo_client.db('test').collection('group4').findOne({_id: id.toString});
        res.json({data: result, code: "SUCCESS", timestamp: Date.now()}).status(200);
    } catch (error) {
        res.json({
            error: error.message,
            code: error.__proto__.name,
            timestamp: Date.now()
        }).status(500)
    }
}


exports.insertOne = async (req, res, next) => {
    try {
        const body = req.body;
        const result = await mongo_client.db('test').collection('group4').insertOne(body);
        res.json({data: result, code: "SUCCESS", timestamp: Date.now()}).status(201);
    } catch (error) {
        res.json({
            error: error.message,
            code: error.__proto__.name,
            timestamp: Date.now()
        }).status(500)
    }
}

exports.deleteOne = async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await mongo_client.db('test').collection('group4').deleteOne({_id: id.toString});
        res.json({data: result, code: "SUCCESS", timestamp: Date.now()}).status(200);
    } catch (error) {
        res.json({
            error: error.message,
            code: error.__proto__.name,
            timestamp: Date.now()
        }).status(500)
    }
}

exports.updateOne = async (req, res, next) => {
    try {
        const id = req.params.id;
        const update = req.body;
        const result = await mongo_client.db('test').collection('group4').updateOne({_id: id.toString}, {$set: update});
        res.json({data: result, code: "SUCCESS", timestamp: Date.now()}).status(200);
    } catch (error) {
        res.json({
            error: error.message,
            code: error.__proto__.name,
            timestamp: Date.now()
        }).status(500)
    }
}