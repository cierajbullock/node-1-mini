let books = [];

let id = 0;

module.exports = {
    create: (req, res) => {
        let newBook = req.body;
        newBook.id = id;
        id++;
        books.push(req.body);
        res.status(200).send(books);
    },
    read: (req, res) => {
        res.status(200).send(books);
    },
    update: (req, res) => {
        const updateID = req.params.id;
        let index = books.findIndex(book => book.id == updateID);
        books [index] = {
            id: updateID,
            title: req.body.title,
            author: req.author.title
        };
    res.send(books);
    },

    delete: (req, res) => {
        const deleteBook = req.params.id;
        bookID = books.findIndex(book => book.id == deleteBook);
        books.splice(deleteBook, 1);
        res.status(200).send(books);
    }
}