import React, { useState } from 'react'
import Steps from '../components/Steps'
import Preview from '../components/Preview'


function UserForm() {
  const [userInput, setUserInput] = React.useState({
    personalData:
    {
      name: '',
      jobTitle: '',
      location: '',
      email: '',
      phone: '',
      github: '',
      linkedin: '',
      portfolio: '',
    },
    educationalData:
    {
      course: '',
      college: '',
      university: '',
      year: '',
    },
    experience:
    {
      jobRole: '',
      company: '',
      joblocation: '',
      duration: '',
    },
    skills: [],

    summary: ''
  })

  // state for finish
  const [finish, setFinish] = useState(false)

  // state for storing id of created resume
  const [resumeId, setResumeId] = useState("")


  return (
    <>
      {
        finish ?
          <div style={{ height: "100vh" }} className='d-flex justify-content-center align-items-center'>
            <Preview resumeId={resumeId} setUserInput={setUserInput} userInput={userInput} finish={finish} />
          </div>
          :
          <div className="container">
            <div className="row p-5">
              <div className="col-6">
                <Steps setResumeId={setResumeId} userInput={userInput} setUserInput={setUserInput} setFinish={setFinish} />
              </div>
              <div className="col-6">
                <Preview userInput={userInput} />
              </div>
            </div>
          </div>}
    </>
  )
}

export default UserForm