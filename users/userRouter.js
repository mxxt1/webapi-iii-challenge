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

router.get('/:id', (req, validateUserId, res) => {

});

router.get('/:id/posts', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

//custom middleware

function validateUserId(req, res, next) {
    db.getById(req.params.id)
    .then(user => {
        if (user === undefined || user === null || user === {}){
            res.status(400).json({message: `User not found or authorized`})
        } else {
            req.user = user;
            next();
        }
    })
};

function validateUser(req, res, next) {
    if (!req.body){
        res.status(400).json({message: `Please include all user data`})
    } else if (!req.body.name){
        res.status(400).json({message: `Missing 'name' data`})
    } else {
        next();
    }
};

function validatePost(req, res, next) {
    if (!req.body){
        res.status(400).json({message: `Post data does not exist`})
    } else if (!req.body.text){
        res.status(400).json({message: `Please include all data`})
    } else {
        next();
    }
};

module.exports = router, validateUserId, validateUser, validatePost;
