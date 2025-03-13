const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const mongodb = require('./data/database');

const app = express();
app.use(bodyParser.json());
app.use(cors())
PORT = 8080

app.use('/', require('./routes'))

mongodb.init((err) => {
    if (err) {
        console.log(err)
    } else {
        app.listen(PORT, () => {
            console.log('Listening in port ' + PORT)
        })
    }
})
