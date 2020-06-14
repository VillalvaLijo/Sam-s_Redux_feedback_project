//write get, post and delete request to be sent to the database regarding feedback input

const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//Post all feeback entries to the database with a Post request
router.post('/', (req, res) => {
    console.log(req.body);
    const feelings = req.body.feelings;
    const understanding = req.body.understanding;
    const support = req.body.support;
    const comments = req.body.comments
    const queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES($1, $2, $3, $4)`

    pool.query(queryText, [feelings, understanding, support, comments])
        .then((results) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database querry ${queryText}`, error);
            res.sendStatus(500);
        });
});


module.exports = router;