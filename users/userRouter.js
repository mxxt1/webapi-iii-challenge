const express = require('express');
const db = require('./userDb.js');

const router = express.Router();

router.post('/', (req, res) => {
    db.insert(req.body)
    .then(response => {
        res.status(400).json(response)
    })
    .catch(err => {
        res.status(500).json({Error: `failed to write to database`})
    })
});

router.post('/:id/posts', (req, res) => {
    db.insert(req.body)
    .then(response => {
        res.status(400).json(response)
    })
    .catch(err => {
        res.status(500).json({Error: `Failed to add post to user id ${req.params.id}`})
    })
});

router.get('/', (req, res) => {
    db.get()
    .then(users => {
        res.status(200).json(users)
    })
    .catch(err => {
        res.status(500).json({message: `Failed to retrieve users`})
    })
});

router.get('/:id', (req, res) => {

});

router.get('/:id/posts', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

//custom middleware

function validateUserId(req, res, next) {
    // if (req.params.id)


};

function validateUser(req, res, next) {

};

function validatePost(req, res, next) {

};

module.exports = router, validateUserId, validateUser, validatePost;
