const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GenreSchema = new Schema(
    {
        name: {type: String, max: 100, min: 3},
        genre_type: {type: String, required: true, enum: ['Fiction', 'Non-Fiction'], default: 'Fiction'}
    }
);

//Export model
module.exports = mongoose.model('Genre', GenreSchema);