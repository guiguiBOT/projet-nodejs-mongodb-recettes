const authorRouter = require("express").Router()
const authorController = require('../controllers/authorController')

authorRouter.get('/authors', authorController.getAuthors)
authorRouter.get('/authors/:id', authorController.getAuthorById)
authorRouter.post('/author', authorController.postAuthor)

module.exports = authorRouter;