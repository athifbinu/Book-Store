const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name:{
        type : String,
        require : true
    },
    author : {
        type : String,
        require : true
    },
    description : {
        type : String,
        require : true
    },
    price : {
        type : String,
        require : true
    },
    available : {
        type : Boolean,
        
    },
    image: {
        type :String,
        require : true
    }
});

module.exports = mongoose.model("Book",bookSchema);

//books