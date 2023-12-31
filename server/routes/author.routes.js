const AuthorController = require('../controllers/author.controllers');


module.exports = app => {
    app.get('/api/authors', AuthorController.findAll);
    app.post('/api/authors', AuthorController.createAuthor);
    app.get('/api/authors/:id', AuthorController.findOneAuthor);
    app.put('/api/authors/:id', AuthorController.updateExistingAuthor);
    app.delete('/api/authors/:id', AuthorController.deleteAuthor);
}