const express = require('express');
const router = express.Router();

//import models
const Genre = require('../models/genre');

/// GENRE ROUTES ///

//POST request for creating Genre.
router.post('/', (req, res) => {
    const genre = new Genre(req.body);
    genre.save()
        .then(() => res.json(genre))
        .catch(err => res.status(400).json("Error: " + err))
});

// GET request for list of all Genre.
router.get('/', (req, res) => {
    Genre.find()
        .then( genres => res.json(genres))
        .catch(err => res.status(400).json("Error: " + err))
});

// GET request for one Genre.
router.get('/:id', (req, res) => {
    Genre.findById(req.params.id)
        .then( genre => res.json(genre))
        .catch(err => res.status(400).json("Error: " + err))
});

// PATCH request to update Genre.
router.patch('/:id', (req, res) => {
    Genre.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then( genre => res.json(genre))
        .catch(err => res.status(400).json("Error: " + err))
});

// DELETE request to delete Genre.
router.delete('/:id', (req, res) => {
    Genre.findByIdAndDelete(req.params.id)
        .then( (genre) => res.json(genre))
        .catch(err => res.status(404).json("Item not Found in database: " + err))
});


module.exports = router;