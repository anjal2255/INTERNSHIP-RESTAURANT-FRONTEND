

import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
// import '../App.css';
import axios from 'axios'
import Navbar from './Navbar'


const Admin = () => {
    var[inputs,setInputs] = useState({
        fname:"",
        fprice:"",
        time:"",
        // Add a new state for the image URL
        imageUrl: ""
        
      
    })
     const inputHandler = (e)=>{
        const {name,value}=e.target
        setInputs((prevData)=>({...prevData,[name]:value}))
        console.log(inputs)
     }
     const addHandler = ()=>{
      console.log("button clicked");
      axios.post("http://localhost:8080/add",inputs)
      .then((response)=>{
        console.log(response.data)
        alert(response.data)
      })
      .catch((err)=>console.log(err))
     }

  return (
        <div><Navbar/>
        <div style={{margin:'6%'}} className='App' >
    <Typography variant='h4' style={{color:'black'}}>
      Add Food
      </Typography>
      <br /><br />
      <Grid>
        <Grid >
          <TextField 
          label='Food Name' 
          variant='outlined' 
          name='fname'
          value={inputs.fname}
          onChange={inputHandler}
          />
        </Grid><br /><br />
        <Grid > 
          <TextField label='Price' 
          variant='outlined' 
          name='fprice'
          value={inputs.eage}
          onChange={inputHandler}
          />
        </Grid><br /><br />
        <Grid >
                    <TextField
                        label='Image URL'
                        variant='outlined'
                        name='imageUrl'
                        value={inputs.imageUrl}
                        onChange={inputHandler}
                    />
                </Grid><br /><br />
                <Grid >
                    <TextField
                        label='Time'
                        variant='outlined'
                        name='time'
                        value={inputs.time}
                        onChange={inputHandler}
                    />
                </Grid>
        
        </Grid>
        <br /><br />
        <Grid> 
        <Button variant='contained' color='error' onClick={addHandler}>Submit</Button>
        </Grid>
    
    </div></div>
  
  )
}

export default Admin