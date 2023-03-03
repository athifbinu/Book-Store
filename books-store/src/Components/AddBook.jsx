import { Button, Checkbox, FormControlLabel, FormLabel, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddBook = () => {

    const history = useNavigate();

    const [inputs, setInputs] = useState({
        name:"",
        author: "",
        description: "",
        price: "",
        image: ""
    })

    const [checked, setChecked] = useState(false)

    const handleChange = (e) => {
        setInputs((prevState)=> ({
            ...prevState,
            [e.target.name] : e.target.value
        }))
    }
    

    const sendRequest = async () => {
        await   axios.post("http://localhost:5000/books", {
            name: String(inputs.name),
            author :  String(inputs.author),
            description :  String(inputs.description),
            price : Number(inputs.price),
            image:  String(inputs.image),
            available :Boolean(checked)
        }).then(res=> res.data)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs,checked);
        sendRequest().then(()=> history("/books"))
    }

  return (
    
    <form action="" onSubmit={handleSubmit}>
        <Box display="flex" flexDirection='column' justifyContent={'center'} maxWidth={500} 
        alignContent={'center'} alignSelf={'center'} marginLeft={'auto'} marginRight={'auto'} 
        marginTop={4}>
        <Box display={"flex"} sx={{}} justifyContent='space-between'>
        <TextField value={inputs.name} onChange={handleChange} label='Enter Book Name' margin='normal' fullWidth variant='outlined' name='name'/> 
        <TextField value={inputs.author} onChange={handleChange} label='Author' margin='normal' fullWidth variant='outlined' name='author'/>
        </Box>
        <TextField value={inputs.description} onChange={handleChange} label='Genre' margin='normal' fullWidth variant='outlined' name='description'/>
        <TextField value={inputs.price} onChange={handleChange} label='Price' type={'number'} margin='normal' fullWidth variant='outlined' name='price'/>
        <TextField value={inputs.image} onChange={handleChange} label='Paste Your Image Url' margin='normal' fullWidth variant='outlined' name='image'/>
        <FormControlLabel control={<Checkbox Checked={checked} onChange={()=>setChecked(!checked)} />} label="Available" />
        <Button type='submit' variant='contained' >Add Book</Button>
        </Box>
    </form>
    
  )
}

export default AddBook