const express=require("express")
const mongoose=require("mongoose")
const router=require("./routes/book-routes")
const app =express();
//fgmRqkRJk88h3drI





mongoose.connect("mongodb+srv://Athif:fgmRqkRJk88h3drI@cluster0.ktjqylo.mongodb.net/BookStore?retryWrites=true&w=majority"
).then(()=>{
    console.log("connected To Db")
    
}).catch((err)=>{
    console.log("db err",+err)
})



//midleware


app.use("/books",router)

app.use(express.json());





app.listen(3000,()=>{
    console.log("post 3000 stated")
})