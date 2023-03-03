import { Box, Button } from '@mui/material'
import React from 'react'
import './Book.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import {motion} from 'framer-motion'
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
        <motion.img whileHover={{scale:0.9}} src={image} alt={name} style={{width:"250px",height:"300px"}}/>
        <h3 style={{width:"200px",margin:"10px 40px"}}>{name}</h3>
        <article style={{margin:"5px 0px",width:"100%"}}>By {author}</article>
        <p style={{width:"200px",margin:"5px 0px"}}>{description}</p>
        <h3 style={{width:"200px",marginLeft:"130px",marginTop:"10px",marginBottom:'10px'}}>Rs : {price}</h3>
        <Box sx={{display:"flex",width:"200px",gap:'20px'}}>
        <button className='btn' onClick={deleteHandler} >Delete</button>
        <Button style={{backgroundColor:"green",color:"black",borderRadius:"25px",height:'34px'}} className='up-btn' LinkComponent={Link} to={`/books/${_id}`}>Update</Button>
    </Box>
    </Box>
  )
}

export default Book