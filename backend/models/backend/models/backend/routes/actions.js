const express = require('express');
const router = express.Router();
const Action = require('../models/action.model');
const authenticateToken = require('../middleware/authenticateToken');

router.post('/saveActions', authenticateToken, async (req, res) => {
    try {
        const actions = req.body.actions.map(action => new Action(action));
        await Action.insertMany(actions);
        res.status(200).send('Actions saved successfully!');
    } catch (err) {
        res.status(500).send(err.message);
    }
});

router.get('/getActions', authenticateToken, async (req, res) => {
    try {
        const actions = await Action.find({});
        res.json(actions);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = router;
