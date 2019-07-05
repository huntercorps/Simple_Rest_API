const express = require('express');
const router = express.Router();

//import models
const Book = require('../models/book');

/// BOOK ROUTES ///

// POST request for creating Book.
router.post('/', (req, res) => {
    const book = new Book(req.body);
    book.save()
        .then(() => res.json(book))
        .catch(err => res.status(400).json("Error: " + err))
});

// GET request for list of all Book items.
router.get('/', (req, res) => {
    Book.find().populate('author').populate('genre')
        .sort()
        .then( books => res.json(books))
        .catch(err => res.status(400).json("Error: " + err))
});

// GET request for one Book.
router.get('/:id', (req, res) => {
    Book.findById(req.params.id).populate('author').populate('genre')
        .then( book => res.json(book))
        .catch(err => res.status(400).json("Error: " + err))
});

// PATCH request to update Book.
router.patch('/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then( book => res.json(book))
        .catch(err => res.status(400).json("Error: " + err))
});

// DELETE request to delete Book.
router.delete('/:id', (req, res) => {
    Book.findByIdAndDelete(req.params.id)
        .then( (book) => res.json(book))
        .catch(err => res.status(404).json("Item not Found in database: " + err))
});


module.exports = router;