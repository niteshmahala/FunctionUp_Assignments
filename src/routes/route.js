const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController= require("../controllers/publisherController")
const { route } = require('express/lib/application');
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("booksCollection", bookController.booksCollection)
router.post("/createAuthor", authorController.createAuthor  )
router.post("/createPublisher", publisherController.createPublisher )
// router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook  )

router.get("/fetchbooks", bookController.fetchbooks)

router.get('/get-all-books', bookController.fetchbooks)
router.put('/books', bookController.updateBooks)
// router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)
router.get('/updateBooks', bookController.updateBooks)
module.exports = router;