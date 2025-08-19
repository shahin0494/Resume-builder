import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { TfiDownload } from "react-icons/tfi";
import { CgPokemon } from "react-icons/cg";
import { GiHummingbird } from "react-icons/gi";
import { TbHistoryToggle } from "react-icons/tb";
import Edit from './Edit';



function Preview() {
    return (
        <div >
            <Stack direction={'row'} sx={{ justifyContent: 'flex-end' }}>
                <Stack direction={'row'}>
                    {/* download */}
                    <button className='btn fs-2' style={{ color: 'green' }}><TfiDownload /></button>
                    {/* edit */}
                    <div> <Edit/> </div>
                    {/* history */}
                    <Link to={'/history'}>
                    <button className='btn fs-1' style={{ color: 'black' }}><TbHistoryToggle /></button>
                    </Link>
                    <Link to={'/resume'} className='btn text-danger'>Back</Link>
                </Stack>
            </Stack>
            <Box component="section" >
                <Paper elevation={1} sx={{ my: 5, p: 2, textAlign: 'center' }}>
                    <h2>Name</h2>
                    <h6>Job Title</h6>
                    <p><span>Location</span> | <span>Email</span> | <span>Phone</span> </p>
                    <p>
                        <Link href={"gihub.com"}>GITHUB | </Link>
                        <Link href={"gihub.com"}>LINKEDIN | </Link>
                        <Link href={"gihub.com"}>PORTFOLIO </Link>
                    </p>
                    <Divider sx={{ fontSize: '25px' }}>Summary</Divider>
                    <p className='fs-5 text-start'>user summary</p>
                    <Divider sx={{ fontSize: '25px', marginBottom: '10px' }}>Education</Divider>
                    <h5>User Education</h5>
                    <p><span>College</span> | <span>University</span> | <span>Year</span></p>
                    <Divider sx={{ fontSize: '25px', marginBottom: '10px' }}>Professional Experience</Divider>
                    <h5>User Job</h5>
                    <p><span>Company</span> | <span>Location</span> | <span>Duration</span></p>
                    <Divider sx={{ fontSize: '25px', marginBottom: '10px' }}>Skills</Divider>
                    <Stack spacing={2} direction="row" sx={{ flexWrap: 'wrap', gap: '10px' }}>

                        <Button className='ms-3' variant="contained">User Skill</Button>
                        <Button variant="contained">User Skill</Button>
                        <Button variant="contained">User Skill</Button>
                        <Button variant="contained">User Skill</Button>
                        <Button variant="contained">User Skill</Button>
                        <Button variant="contained">User Skill</Button>

                    </Stack>


                </Paper>
            </Box>
        </div>
    )
}

export default Preview