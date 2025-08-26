import React, { useState } from 'react'
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
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { addDownloadHistoryAPI } from '../services/allApi';



function Preview({ userInput, finish }) {
    // console.log(userInput);

    const [downloadStatus,setDownloadStatus] = useState(false)

    const downloadCv = async () => {
        // get element for taking screenshot
        const input = document.getElementById("result")
        const canvas = await html2canvas(input, { scale: 2 })
        const imgURL = canvas.toDataURL("image/png")
        // pdf
        const pdf = new jsPDF(imgURL)
        const pdfWidth = pdf.internal.pageSize.getWidth()
        const pdfHeight = pdf.internal.pageSize.getHeight()

        pdf.addImage(imgURL, "PNG", 0, 0, pdfWidth, pdfHeight)
        pdf.save("resume.pdf")

        // get data
        const localTimeData = new Date()
        const timeStamp = `${localTimeData.toLocaleDateString()},${localTimeData.toLocaleTimeString()}`
        console.log(timeStamp);

        // add download cv to json using api call
        try{
            const result = await addDownloadHistoryAPI({...userInput,imgURL,timeStamp})
            console.log(result);
            setDownloadStatus(true) 
        }
        catch(err){
            console.log(err);
            
        }
        
    }



    return (
        < >
            {
                userInput.personalData.name != '' &&
                <>
                    <div>
                       {
                       finish &&
                       <Stack direction={'row'} sx={{ justifyContent: 'flex-end' }}>
                            <Stack direction={'row'}>
                                {/* download */}
                                <button onClick={downloadCv} className='btn fs-2' style={{ color: 'green' }}><TfiDownload /></button>
                                {
                                    downloadStatus &&
                                    <>
                                    {/* edit */}
                                    <div> <Edit /> </div>
                                    {/* history */}
                                    <Link to={'/history'}>
                                        <button className='btn fs-1' style={{ color: 'black' }}><TbHistoryToggle /></button>
                                    </Link>
                                </>
                                }
                                {/* back */}
                                <Link to={'/resume'} className='btn text-danger'>Back</Link>
                            </Stack>
                        </Stack>}
                        <Box component="section" >
                            <Paper id="result" elevation={1} sx={{ my: 5, p: 2, textAlign: 'center' }}>
                                <h2>{userInput.personalData.name}</h2>
                                <h6>{userInput.personalData.jobTitle}</h6>
                                <p><span>{userInput.personalData.location}</span> | <span>{userInput.personalData.email}</span> | <span>{userInput.personalData.phone}</span> </p>
                                <p>
                                    <Link href={userInput.personalData.github}> GitHub </Link>
                                    <Link href={userInput.personalData.linkedin}> linkedin </Link>
                                    <Link href={userInput.personalData.portfolio}> Portfolio </Link>
                                </p>
                                <Divider sx={{ fontSize: '25px' }}>Summary</Divider>
                                <p className='fs-5 text-start'>{userInput.summary}</p>
                                <Divider sx={{ fontSize: '25px', marginBottom: '10px' }}>Education</Divider>
                                <h5>{userInput.educationalData.course}</h5>
                                <p><span>{userInput.educationalData.college}</span> | <span>{userInput.educationalData.university}</span> | <span>{userInput.educationalData.year}</span></p>
                                <Divider sx={{ fontSize: '25px', marginBottom: '10px' }}>Professional Experience</Divider>
                                <h5>{userInput.experience.jobRole}</h5>
                                <p><span>{userInput.experience.company}</span> | <span>{userInput.experience.jobLocation}</span> | <span>{userInput.experience.duration}</span></p>
                                <Divider sx={{ fontSize: '25px', marginBottom: '10px' }}>Skills</Divider>
                                <Stack justifyContent={'space-evenly'} direction="row" sx={{ flexWrap: 'wrap', gap: '10px' }}>
                                    {userInput.skills?.map(skill => (
                                        <Button variant='contained'>{skill}</Button>
                                    ))}
                                </Stack>
                            </Paper>
                        </Box>
                    </div>
                </>
            }
        </>
    )
}

export default Preview