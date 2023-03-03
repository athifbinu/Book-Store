
import React,{useEffect,useState} from 'react'
import Book from './Book'
import "./Book.css"
import axios from 'axios';
import {Col} from 'reactstrap'
// import Book from '../../../../Backend/model/Book';
const URL = 'http://localhost:5000/books';

const fetchHandler = async () => {
   
  return   await axios.get(URL).then((res)=> res.data)
}

const Books = () => {

    const [books, setBooks] = useState()

    useEffect(() => {
      
        fetchHandler().then(data=>setBooks(data.books))
         
        }, [])

        console.log(books);

  
        
  return (

    <div className='mt'>
    <ul>
        {books && books.map((book,i)=> (
            <li key={i}>
                <Book book={book}/>
            </li>
        )) }
    </ul>
</div>
  )
}

export default Books