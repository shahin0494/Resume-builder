import React from 'react'
import { MdOutlineDocumentScanner } from "react-icons/md";
import { BsDownload } from "react-icons/bs";
import { Link } from 'react-router-dom';

function ResumeGenerator() {
  return (
    <>
      <section className='tools p-5 '>
        {/* tools */}
        <h3 className='text-center mb-5 '>Create a job winning Resume in minutes</h3>
        <hr />
        <div className='container-fluid mt-5'>
          <div className='row justify-content-center align-items-center'>
            <div className='col-12 col-md-1'></div>

            <div className='col-12 col-md-4 shadow border  p-5 text-center'>
              <MdOutlineDocumentScanner className='mb-4 fs-3 text-primary ' />
              <h4>Add your Information</h4>
              <p>Add pre-written example to each section</p>
              <h4>Step : 1</h4>
            </div>

            <div className='col-12 col-md-2'></div>

            <div className='col-12 col-md-4 shadow border  p-5  text-center'>
              <BsDownload className='mb-4 fs-3 text-danger ' />
              <h4>Download  your Resume</h4>
              <p>Download and start applying</p>
              <h4>Step : 2</h4>
            </div>

            <div className='col-12 col-md-1'></div>

          </div>
        </div>
        <div className='d-flex justify-content-center align-items-center mt-5'>
          <Link to={'/form'}  ><button className='btn btn-danger'>Let's Start</button></Link>
        </div>


      </section>
    </>
  )
}

export default ResumeGenerator