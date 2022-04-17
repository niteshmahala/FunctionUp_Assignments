const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const AuthorController= require("../controllers/authorController")
const AllController= require("../controllers/allController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})



router.post("/createBook", AllController.createBook  )
router.get("/getBooksData", AllController.getBooksData)
router.post("/creatNewAuthor", AllController.creatNewAuthor)
router.post("/createNewBook", AllController.createNewBook)
router.get("/allBooks", AllController.allBooks)
router.get("/authorName", AllController.authorName)
router.post("/createAuthor", AllController.createAuthor)
router.post("/updateBooks", AllController.updateBooks)
router.post("/deleteBooks", AllController.deleteBooks)
router.get("/updatedBookPrice", AllController.updatedBookPrice)


module.exports = router;