import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { AiOutlineDeleteRow } from "react-icons/ai";
import { getHistoryAPI } from '../services/allApi';


function History() {

  const [resume, setResume] = useState([])

  useEffect(() => {
    getHistory()
  }, [])

  const getHistory = async () => {
    try {
      const result = await getHistoryAPI()
      console.log(result);
      setResume(result.data)
    }
    catch (err) {
      // console.log(err);

    }
  }
  console.log(resume);


  return (
    <div>
      <div className='container-fluid' >
        <h1 className="text-center my-5">Resume Downloaded History</h1>
        <span><Link to={'/'} style={{ marginTop: '-80px' }} className='float-end me-5 fs-4'>BACK</Link></span>
      </div>
      <hr />
      <Box component="section" className='container-fluid' >
        <div className='row'>

         {
          resume?.length>0?
            resume?.map((item,index)=>(
              <div key={index} className='col-md-4'>
                  <Paper elevation={1} sx={{ my: 5, p: 2, textAlign: 'center' }}>
                    <div className='d-flex align-items-center justify-content-evenly'>
                      <h6>Review At: <br />{item?.timeStamp}</h6>
                      <button className='btn  fs-2  ms-5'><AiOutlineDeleteRow /></button>

                    </div>
                    <div className='border rounded p-3'>
                      <img className='img-fluid' src={item?.imgURL} alt="resume" />
                    </div>
                  </Paper>
                </div>
            ))
          :
          <p>HIstory is empty</p>
         }


        </div>
      </Box>
    </div>
  )
}

export default History