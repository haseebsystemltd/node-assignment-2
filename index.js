const express = require('express');
const app = express();

const db = require('./database/mongoConnection');
const router = require('./routes');
db.connect();

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

app.use('/', router)

app.use((req, res) => {
    res.status(404).json({
        message: 'Page not Found'
    });
})

app.listen(4000, () => {
    console.log('Server Connected');
});