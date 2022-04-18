const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

const createBook= async function (req, res) {
    let book = req.body
    let authorId = book.author
    let publisherId = book.publisher

//////////////////////////////////////3////////////////////////////////////////
    if(!authorId) {
        return res.send({message: "Author id must be present in the book detials"})   
    }

////////////////////////////////////// 3 //////////////////////////////////////
    let author = await authorModel.findById(authorId)

    if(!author) {
        return res.send({message: "Not a valid author id"})
    }


    if(!publisherId) {
        return res.send({message: "Publihser id must be present in the book details"})
    }


    let publisher = await publisherModel.findById(publisherId) 

    if(!publisher) {
        return res.send({message: "Not a valid publisher id"})
    }

    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}
 //////////////////////////////////4/////////////////////////////////////////////////
const fetchbooks = async function (req, res) {
    
    let books = await bookModel.find().populate('author publisher')
    res.send({data: books})
}
////////////////////////////////////// 5 //////////////////////////////////////
const updateBooks = async function (req, res) {
    // update hardcover to true for few books
    let hardCoverPublishers = await publisherModel.find({name : {$in:['Penguin','HarperCollins'] }}).select({_id:1})
    let arrayOfPublishers = []
    
    for (let i = 0; i < hardCoverPublishers.length; i++) {
        let objId = hardCoverPublishers[i]._id 
        arrayOfPublishers.push(objId)
    }
    
    let books = await bookModel.updateMany({publisher: {$in: arrayOfPublishers}},{isHardCover: true})

    res.send({data: books})
}

module.exports.createBook= createBook
module.exports.fetchbooks = fetchbooks
module.exports.updateBooks = updateBooks

