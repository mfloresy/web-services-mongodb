const dotenv = require('dotenv');
dotenv.config();
const mongoClient = require('mongodb').MongoClient;

let database;
const init = (callback) => {
    console.log('[DEBUG] Step 1');
    if (database) {
        console.log('Database is already initialized');
        return callback(null, database);
    }
    console.log('[DEBUG] Step 2');
    console.log(process.env.MONGODB_URI)
    mongoClient.connect(process.env.MONGODB_URI)
        .then((client) => {
            console.log('[DEBUG] Step 3');
            database = client;
            callback(null, database);
        })
        .catch((err) => {
            console.log('[DEBUG] Step 4');
            console.log(err);
            callback(null, database);
        });
};

const getDatabase = () => {
    console.log('[DEBUG] Step 5');
    if (!database) {
        throw Error('Database not initialized');
    }
    return database;
}

module.exports = {
    init,
    getDatabase
}