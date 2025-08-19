import React from 'react'
import { Link } from 'react-router-dom'
import bgVideo from '../assets/bg.mp4';


function LandingPage() {
  return (
    <>

      <section id='part1' style={{ position: "relative", height: '61vh', overflow: "hidden" }}>
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            objectFit: "cover",
            zIndex: -1
          }}
        >
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>


        <div className='row pt-5 mb-5 mt-5'>
          <div className='col-12 col-md-4'></div>
          <div className='col-12 col-md-4 box border py-5 rounded mt-5 text-center' style={{
            position: 'relative',
            zIndex: 1,
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(50px)',
            borderRadius: '10px',
            padding: '1rem',
            border: '1px solid rgba(60, 59, 59, 0.3)',
            fontFamily: 'cursive',
            fontWeight: '500'
          }}>
            <h3>Designed to get hired</h3>
            <h4>Hired to get Designed</h4>
            <Link to={'/resume'}  ><button className=' mt-2 btn btn-danger'>Create Resume</button></Link>
          </div>
          <div className='col-12 col-md-4'></div>
        </div>
      </section >


      <section className=' p-5 bg-dark text-light'>
        {/* tools */}
        <h1 className='text-center'>TOOLS</h1>
        <div className='row align-items-center'>
          <div className='tool-content col-12 col-md-6 p-5'>
            <h4>Resume</h4>
            <p>Create unlimited new resume and edit them afterwards</p>
            <hr />
            <h4>Cover letters</h4>
            <p>Easily with professional cover letters</p>
            <hr />
            <h4>Jobs</h4>
            <p>Automatically recieve new and relevant job posting</p>
            <hr />
            <h4>Applications</h4>
            <p>Effortesly manage and track your job application in an organised manner</p>
            <hr />
          </div>
          <div className='tool-image col-md-6  col-12'>
            <img className='w-75 ms-5 rounded' src="https://cdn.i-scmp.com/sites/default/files/styles/1020x680/public/d8/images/canvas/2025/02/27/6022f40a-0141-424a-b2bb-f9d6b781c002_7e08d4c6.jpg?itok=-tLrYzor&v=1740646345" alt="" />
          </div>
        </div>
      </section>


      <section className='' style={{ width: '100%', height: '450px', backgroundImage: 'url(https://www.theindustry.fashion/wp-content/uploads/2024/08/Louis-Vuitton-Jude-Bellingham.jpg)', backgroundAttachment: 'fixed', backgroundPosition: 'top', backgroundSize: 'cover' }}></section>

      <section className='tools p-5 bg-dark text-light'>
        {/* tools */}
        <h1 className='text-center'>TESTIMONY</h1>
        <div className='row align-items-center'>
          <div className='tool-content col-12 col-md-6 p-5'>
            <h4>Trusted by professionals worldwide</h4>
            <p>Create unlimited new resume and edit them afterwards</p>
            <p>Easily with professional cover letters</p>
          </div>

          <div className='tool-image col-md-6  col-12'>
            <div className='row'>
              <div className='col-md-3'>
                <img className='w-100' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk2OQdyZkbNdA1TVZWmXPhV-rY3LqX0RZ6kg&s" alt="" />
              </div>
              <div className='col-md-3'>
                <img className='w-100' src="https://i.pinimg.com/736x/e0/57/36/e05736619964aac5d3cabf6538dc2c83.jpg" alt="" />
              </div>
              <div className='col-md-3'>
                <img className='w-100' src="https://ttmmanagement.co.uk/wp-content/uploads/2019/03/356-700x850.jpg" alt="" />
              </div>
              <div className='col-md-3'>
                <img className='w-100 ' src="https://pbs.twimg.com/profile_images/1617408747080667136/C88UDPNZ_400x400.jpg" alt="" />
              </div>
            </div>

            <div className='row'>
              <div className='col-md-3'>
                <img className='w-100' src="https://i.pinimg.com/736x/da/24/09/da24095a996f6e97a6a4ca5909c56a6a.jpg" alt="" />
              </div>
              <div className='col-md-3'>
                <img className='w-100' src="https://i.pinimg.com/originals/33/46/67/3346672e8b26672ec7cd548b5033478d.jpg" alt="" />
              </div>
              <div className='col-md-3'>
                <img className='w-100' src="https://i.pinimg.com/474x/22/76/82/227682cb102293ceec92763dee904c31.jpg" alt="" />
              </div>
              <div className='col-md-3'>
                <img className='w-100 ' src="https://w0.peakpx.com/wallpaper/906/988/HD-wallpaper-neymar-potrait-neymar-potrait-black-and-white-football-thumbnail.jpg" alt="" />
              </div>
            </div>

            <div className='row'>
              <div className='col-md-3'>
                <img className='w-100' src="https://www.laphamsquarterly.org/sites/default/files/styles/tall_rectangle_custom_user_small_2x/public/images/contributor/hitler_360x450.jpg?itok=ECBA4zKq&timestamp=1409690500" alt="" />
              </div>
              <div className='col-md-3'>
                <img className='w-100' src="https://t4.ftcdn.net/jpg/11/98/98/07/360_F_1198980706_yBMCUTQR29SoqJy1abvg9CMPlbjvfNOb.jpg" alt="" />
              </div>
              <div className='col-md-3'>
                <img className='w-100' src='https://media.istockphoto.com/id/179520213/vector/black-and-white-drawing-of-julius-caesar.jpg?s=612x612&w=0&k=20&c=CAH8AOsfHNoIw7uODnBojBMtT6X7ExgoVXzlLa9uCLk= 'alt="" />
              </div>
              <div className='col-md-3'>
                <img className='w-100 ' src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-2637237.jpg" alt="" />
              </div>
            </div>

          </div>
        </div>
      </section>

    </>
  )
}

export default LandingPage