import { Box, Button } from '@mui/material'
import React from 'react'
import './Book.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Book = (props) => {
    const history = useNavigate();
    const {_id,name,author,description,price,image} = props.book;

    const deleteHandler = async () => {
       await  axios.delete(`http://localhost:5000/books/${_id}`)
       .then((res) => res.data)
       window.location.reload()
    }

  return (
    <Box sx={{margin:"10px 10px",width:"100px",height:"100px"}}>
        <img src={image} alt={name} style={{width:"200px",height:"250px"}}/>
        <h3 style={{width:"200px",margin:"10px 40px"}}>{name}</h3>
        <article style={{margin:"5px 0px",width:"100%"}}>By {author}</article>
        <p style={{width:"200px",margin:"5px 0px"}}>{description}</p>
        <h3 style={{width:"200px",marginLeft:"130px",marginTop:"10px",marginBottom:'10px'}}>Rs {price}</h3>
        <Box sx={{display:"flex",width:"200px"}}>
        <Button variant='outlined' startIcon={<EditIcon fontSize='small' color='white'/>} style={{margin:"5px 5px"}} LinkComponent={Link} to={`/books/${_id}`} sx={{mt:'auto'}}>Update</Button>
        <Button variant='outlined' startIcon={<DeleteIcon fontSize='small' color='warning'/>} style={{margin:"5px 5px"}} onClick={deleteHandler} sx={{mt:'auto'}}>Delete</Button>
    </Box>
    </Box>
  )
}

export default Book