const express=require("express")
const mongoose=require("mongoose")
const router=require("./routes/book-routes")
const cors=require('cors')
const app =express();
//fgmRqkRJk88h3drI

//midlewere

app.use("/books",router)

app.use(express.json());

app.use("/books",router)

app.use(cors());



mongoose.connect("mongodb+srv://Athif:fgmRqkRJk88h3drI@cluster0.ktjqylo.mongodb.net/BookStore?retryWrites=true&w=majority"
).then(()=>{
    console.log("connected To Db")
    
}).then(()=>{
    app.listen(5000)
}).catch((err)=>{
    console.log("dv error"+err)
})





//midleware





