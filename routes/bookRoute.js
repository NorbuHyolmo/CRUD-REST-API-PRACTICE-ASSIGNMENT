const express = require('express');
const router = express.Router();
const bookController = require('../controller/book-controller')

router.get('/book',bookController.getAllBooks);

router.post('/book',bookController.createBooks);

router.get('/book/:id',bookController.getBookById);

router.put('/book/:id',bookController.updateBook);

router.delete('/book/:id',bookController.deleteBook);

module.exports = router;