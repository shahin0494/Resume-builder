import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';



function Header() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="rgb(255, 255, 255)"
            aria-label="menu"
            sx={{ mr: 2 , }}
          >
            <img className='rounded' src="https://i.pinimg.com/736x/31/c9/e8/31c9e8fd7622c811f8d8a8a0ed9c1c41.jpg" style={{ width: '55px',  }} alt="" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: "'Quicksand', sans-serif" }}>
            <Link to ={'/'} className='text-light text-decoration-none' >rBuilder</Link> 
          </Typography>
          <Button color="rgb(255, 255, 255)">
            <Tooltip title="
              A ResumeBuilder website is a web application that lets users quickly create, edit, preview, and export professional resumes/CVs using templates and guided inputs. It turns structured user data (education, jobs, skills) into attractive, ATS-friendly, and downloadable resume files (PDF, DOCX) and sharable links.">
              <IconButton sx={{color:'white' , fontFamily: "'Quicksand', sans-serif" }}>
                About Us
              </IconButton>
            </Tooltip>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header