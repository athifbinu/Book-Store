import React, { useEffect,useState } from 'react'
import axios from 'axios'
import Book from '../../../../Backend/models/Book'
const URL ="http://localhost:5000/books"

const fetchHandler =async()=>{

  return   await axios.get(URL).then((res)=> res.data)
}
function Books() {
  const [books,setBooks]=useState()
  useEffect(()=>{
       fetchHandler().then((data)=>setBooks(data))

  },[]);

   console.log(books)

  return (
    <div>
      <ul>
        {books && books.map((book,i)=>{
          <div key={i}>
             <Book book={book}/>
          </div>
        })}
      </ul>
    </div>
  )
}

export default Books
