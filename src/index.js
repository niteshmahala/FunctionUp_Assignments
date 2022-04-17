const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://nitesh:nitesh@cluster0.uedk0.mongodb.net/niteshdb?authSource=admin&replicaSet=atlas-r4u368-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});

// {
//     "bookName": "sun rises", 
//     "authorName": "ernest", 
//     "tags": ["drama", "crazy"],
//     "isPublished": true,
//     "year": "2014",
//     "prices": {
//         "indianPrice": "100INR",
//         "europePrice": "10EURO",
//         "sales": ""
//     }
//  }