const express = require('express');
const router = express.Router();

// import models
const Author = require('../models/author');

/// AUTHOR ROUTES ///

// POST request for creating Author.
router.post('/', (req, res) => {
    const author = new Author(req.body);
    author.save()
        .then(() => res.json(author))
        .catch(err => res.status(400).json("Error: " + err))
});

// GET request for list of all Authors.
router.get('/', (req, res) => {
    Author.find()
        .then( authors => res.json(authors))
        .catch(err => res.status(400).json("Error: " + err))
});

// GET request for one Author.
router.get('/:id', (req, res) => {
    Author.findById(req.params.id)
        .then( author => res.json(author))
        .catch(err => res.status(400).json("Error: " + err))
});

// PATCH request to update Author.
router.patch('/:id', (req, res) => {
    Author.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then( author => res.json(author))
        .catch(err => res.status(400).json("Error: " + err))
});

// DELETE request to delete Author.
router.delete('/:id', (req, res) => {
    Author.findByIdAndDelete(req.params.id)
        .then( (author) => res.json(author))
        .catch(err => res.status(404).json("Item not Found in database: " + err))
});


module.exports = router;