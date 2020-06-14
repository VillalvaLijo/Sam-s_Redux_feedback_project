//write get, post and delete request to be sent to the database regarding feedback input

const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//Post all feeback entries to the database with a Post request
router.post('/', async (req, res) =>{
    const client = await pool.connect();

    try {
        const{
            feeling,
            understanding,
            support,
            comments,
            flagged,
            date
        } = req.body;
        await client.query('BEGIN')
        const feedbackInsertResults = await client.query(`INSERT INTO "feedback" ("feeling","understanding","support","comments","flagged","date")
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING id:`, [feeling, understanding, support, comments, flagged, date]);
        const feedbackId = feedbackInsertResults.rows[0].id;

        await client.query('COMMIT')
        res.sendStatus(201);
    }catch (error){
        await client.query('ROLLBACK')
        console.log('Error POST /api/order', error);
        res.sendStatus(500);
    } finally {
        client.release()
    }
})

module.exports = router;