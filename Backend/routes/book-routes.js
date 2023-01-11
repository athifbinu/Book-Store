const express = require('express');
const Book = require('../model/Book');
const router = express.Router();
const booksController = require("../controllers/books-controller")



router.get("/",booksController.getAllBooks)

router.post("/",booksController.addBook)

router.get("/:id",booksController.getById)

router.put("/:id",booksController.updateBook)

router.delete("/:id",booksController.deleteBook)


module.exports = router;