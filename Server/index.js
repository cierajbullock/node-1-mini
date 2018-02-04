const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const booksController = require('./controllers/books_controller');

app.use(bodyParser.json());
app.use(express.static( __dirname + '/../public/build'));

app.post('/api/books/', booksController.create);
app.get('/api/books/', booksController.read);
app.put('/api/books/', booksController.update);
app.delete('/api/books/:id', booksController.delete);

const port = 3000
app.listen(port, () => console.log(`listening on port ${port}`))