import { Button } from '@mui/material';
import React from 'react'

function Book(props) {
  const {_id,name,author,description,price,image}=props.book;
  return (
    <div>
         <img src={image} alt={name}></img>

         <article>
          byy {author}
         </article>
         <h2>{name}</h2>
         <p>{description}</p>
         <h2>RS {price}</h2>
         <Button>Update</Button>
         <Button>Delete</Button>
    </div>
  )
}

export default Book
