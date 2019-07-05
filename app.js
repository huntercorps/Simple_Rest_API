const express = require('express');
const app = express();
const mongoose = require('mongoose');

//Set Port and enviroment
const port = process.env.PORT || 5000;
require('dotenv/config');

//Import Routes
const bookRouter = require('./routes/book');  //Import routes for "book"
const authorRouter = require('./routes/author');  //Import routes for "author"
const genreRouter = require('./routes/genre');  //Import routes for "genre"

//Middleware
app.use(express.json()); //parse requests w/ json

app.use('/books', bookRouter); // Add book routes to middleware chain.
app.use('/genres', genreRouter); // Add genre routes to middleware chain.
app.use('/authors', authorRouter); // Add author routes to middleware chain.


//Connect to DB
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useCreateIndex: true })
    .then(() => {
        console.log("Database connection established")
        // const connection = mongoose.connection;
        // connection.once("open", () => { console.log("Database connection established") });
    })
    .catch(err => console.log(err));


//Start server listening
app.listen(port, () => console.log(`Server started on port ${ port }`));