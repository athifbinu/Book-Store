import React, { useEffect,useState } from 'react'
const URL ="h
import axios from 'axios'

const fetchHandler =async()=>{
  return   await axios.get(URL).then((res)=> res.data)
}
function Books() {
  const [books,setBooks]=useState()
  useEffect(()=>{
       fetchHandler().then(data=>setBooks(data))
  },)
   console.log(books)
  return (
    <div>
      <h1>Books file success</h1>
    </div>
  )
}

export default Books
