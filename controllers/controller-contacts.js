const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    console.log("getall")
    console.log(req)
    const result = await mongodb.getDatabase().db('web_services').collection('contacts').find();
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts);
    })
}

const getOne = async (req, res) => {
    console.log("getOne")
    console.log(req)
    const contactId = new ObjectId(req.params.id)
    const result = await mongodb.getDatabase().db('web_services').collection('contacts').find({_id: contactId});
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts[0]);
    })
}

module.exports = {
    getAll,
    getOne
}