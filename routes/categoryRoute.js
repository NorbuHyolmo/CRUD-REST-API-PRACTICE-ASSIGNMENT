const express = require('express');
const router = express.Router();
const categoryController = require('../controller/category-controller')


router.get('/category',categoryController.getAllCategory);

router.post('/category',categoryController.createCategory);

router.get('/book/:id',categoryController.getCategoryById);

router.put('/book/:id',categoryController.updateCategory);

router.delete('/book/:id',categoryController.deleteCategory);

module.exports = router;