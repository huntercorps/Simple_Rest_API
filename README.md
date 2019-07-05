## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the server in the development mode.<br>
On Port 5000. [http://localhost:5000](http://localhost:5000).

## Setup And Enviroment

This demo requires a .env file defining the following,
###### DB_URI=mongodb+srv://<user>:<password>@cluster0-ftc8n.mongodb.net/  test?retryWrites=true&w=majority
###### PORT=5000
    
## Database Structure
#### Authors:
first_name: {type: String, required: true, max: 100},<br>
family_name: {type: String, required: true, max: 100},<br>
date_of_birth: {type: Date},<br>
date_of_death: {type: Date},<br>
#### Books:
title: {type: String, required: true},<br>
author: {type: Schema.Types.ObjectId, ref: 'Author', required: true},<br>
summary: {type: String, required: true},<br>
isbn: {type: String, required: true},<br>
genre: [{type: Schema.Types.ObjectId, ref: 'Genre'}]<br>
#### Genres:
name: {type: String, max: 100, min: 3},<br>
genre_type: {type: String, required: true, enum: ['Fiction', 'Non-Fiction'], default: 'Fiction'}<br>
    
     

## API Endpoints

Endpoints for Authors, Books, and Genres. (Crud).

### Authors
##### Create Author: Post: http://localhost:5000/authors
##### Retrieve All Authors: Get: http://localhost:5000/authors
##### Retrieve Author by id: Get: http://localhost:5000/authors/:id
##### Update Author by id: Patch: http://localhost:5000/authors/:id
##### Delete Author by id: Delete: http://localhost:5000/authors/:id

### Books
##### Create Book: Post: http://localhost:5000/books
##### Retrieve All Books: Get: http://localhost:5000/books
##### Retrieve Book by id: Get: http://localhost:5000/books/:id
##### Update Book by id: Patch: http://localhost:5000/books/:id
##### Delete Book by id: Delete: http://localhost:5000/books/:id

### Genres
##### Create Genre: Post: http://localhost:5000/genres
##### Retrieve All Genres: Get: http://localhost:5000/genres
##### Retrieve Genre by id: Get: http://localhost:5000/genres/:id
##### Update Genre by id: Patch: http://localhost:5000/genres/:id
##### Delete Genre by id: Delete: http://localhost:5000/genres/:id
