const mongoose = require('mongoose')



mongoose.connect("mongodb+srv://Athif:fgmRqkRJk88h3drI@cluster0.ktjqylo.mongodb.net/BookStore?retryWrites=true&w=majority")
.then(()=> console.log("Connected To Database"))
.catch((err)=> console.log(err))


exports.connection = mongoose.connection