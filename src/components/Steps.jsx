import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const steps = ['Basic Informations', 'Contact Details', 'Education Details', 'Work Experience', 'Skills & Certifications', 'Review and Submit'];


function Steps() {

  const skillSuggestionArray = ['NODE JS', 'EXPRESS', 'MONGODB', 'REACT', 'ANGULAR', 'NEXT JS', 'BOOTSTRAP', 'TAILWIND']

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  // state for storing user input data
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
  console.log(userInput);

  const userSkillRef = React.useRef()

  // console.log(userInput);



  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  //add skil
  const addSkill = (inputSkill) => {
    if (inputSkill) {
      if (userInput.skills.includes(inputSkill)) {
        alert("Given skill already exists")
      }
      else {
        // userInput.skills.push(inputSkill)
        setUserInput({ ...userInput, skills: [...userInput.skills, inputSkill] })
      }
    }
  }

  // remove skill
  const removeSkill = (delskill) => {
    setUserInput({ ...userInput, skills: userInput.skills.filter(item => item != delskill) })
  }

  // step 1 render the content corresponding to array index
  const renderStepArrayContent = (stepCount) => {
    switch (stepCount) {
      case 0: return (
        <div>
          <h3>Personal Details</h3>
          <div className='d-flex row p-3'>
            <TextField id="standard-basic-name" label="Full Name" variant="standard" onChange={e => setUserInput({
              ...userInput, personalData: { ...userInput.personalData, name: e.target.value }
            })} value={userInput.personalData.name} />
            <TextField id="standard-basic-job" label="Job Title" variant="standard" onChange={e => setUserInput({
              ...userInput, personalData: { ...userInput.personalData, jobTitle: e.target.value }
            })} value={userInput.personalData.jobTitle} />
            <TextField id="standard-basic-location" label="Location" variant="standard" onChange={e => setUserInput({
              ...userInput, personalData: { ...userInput.personalData, location: e.target.value }
            })} value={userInput.personalData.location} />
          </div>
        </div>
      )
      case 1: return (
        <div>
          <h3>Contact Details</h3>
          <div className='d-flex row p-3'>
            <TextField id="standard-basic-mail" label="Email" variant="standard" onChange={e => setUserInput({
              ...userInput, personalData: { ...userInput.personalData, email: e.target.value }
            })} value={userInput.personalData.email} />
            <TextField id="standard-basic-phone" label="Phone No" variant="standard" onChange={e => setUserInput({
              ...userInput, personalData: { ...userInput.personalData, phone: e.target.value }
            })} value={userInput.personalData.phone} />
            <TextField id="standard-basic-git" label="Github Profile Link" variant="standard" onChange={e => setUserInput({
              ...userInput, personalData: { ...userInput.personalData, github: e.target.value }
            })} value={userInput.personalData.github} />
            <TextField id="standard-basic-linkedin" label="LinkedIn Profile Link" variant="standard" onChange={e => setUserInput({
              ...userInput, personalData: { ...userInput.personalData, linkedin: e.target.value }
            })} value={userInput.personalData.linkedin} />
            <TextField id="standard-basic-port" label=" Portfolio Link" variant="standard" onChange={e => setUserInput({
              ...userInput, personalData: { ...userInput.personalData, portfolio: e.target.value }
            })} value={userInput.personalData.portfolio} />
          </div>
        </div>
      )
      case 2: return (
        <div>
          <h3>Education Details</h3>
          <div className='d-flex row p-3'>
            <TextField id="standard-basic-course" label="Course Name" variant="standard" onChange={e => setUserInput({
              ...userInput, educationalData: { ...userInput.educationalData, course: e.target.value }
            })} value={userInput.educationalData.course} />
            <TextField id="standard-basic-clg" label="College Name" variant="standard" onChange={e => setUserInput({
              ...userInput, educationalData: { ...userInput.educationalData, college: e.target.value }
            })} value={userInput.educationalData.college} />
            <TextField id="standard-basic-univ" label="University Name" variant="standard" onChange={e => setUserInput({
              ...userInput, educationalData: { ...userInput.educationalData, university: e.target.value }
            })} value={userInput.educationalData.university} />
            <TextField id="standard-basic-pass" label="Year of Passout " variant="standard" onChange={e => setUserInput({
              ...userInput, educationalData: { ...userInput.educationalData, year: e.target.value }
            })} value={userInput.educationalData.year} />
          </div>
        </div>
      )
      case 3: return (
        <div>
          <h3>Professional Details</h3>
          <div className='d-flex row p-3'>
            <TextField id="standard-basic-role" label="Job Role" variant="standard" onChange={e => setUserInput({
              ...userInput, experience: { ...userInput.experience, jobRole: e.target.value }
            })} value={userInput.experience.jobRole} />
            <TextField id="standard-basic-cname" label="Company Name" variant="standard" onChange={e => setUserInput({
              ...userInput, experience: { ...userInput.experience, company: e.target.value }
            })} value={userInput.experience.company} />
            <TextField id="standard-basic-cloc" label="Company Location" variant="standard" onChange={e => setUserInput({
              ...userInput, experience: { ...userInput.experience, joblocation: e.target.value }
            })} value={userInput.experience.joblocation} />
            <TextField id="standard-basic-dur" label="Duration" variant="standard" onChange={e => setUserInput({
              ...userInput, experience: { ...userInput.experience, duration: e.target.value }
            })} value={userInput.experience.duration} />
          </div>
        </div>
      )
      case 4: return (
        <div>
          <h3>Skills</h3>
          <div className='d-flex align-items-center justify-content-between  p-3' >
            {/* <TextField id="standard-basic-sgill" label="Add Skill" variant="standard" sx={{ width: '400px' }} /> */}
            <input ref={userSkillRef} type="text" className='form-control' placeholder='Add Skill' />
            <Button onClick={() => addSkill(userSkillRef.current.value)} variant="text">Add</Button>
          </div>
          <h3>Suggessions :</h3>
          <div className="d-flex flex-wrap justify-content-between my-3">
            {
              skillSuggestionArray.map(userSkill => (
                <Button onClick={() => addSkill(userSkill)} className='m-1' key={userSkill} variant="outlined">{userSkill}</Button>
              ))
            }
          </div>
          <h5>Added Skills</h5>
          <div className="d-flex flex-wrap justify-content-between my-3">
            {/* span must duplicate according to user adding skill */}
            {userInput.skills.length > 0 ?
              userInput.skills.map(skill => (
                <span key={skill} className='btn btn-primary d-flex  justify-content-center align-items-center  my-3' >{skill}
                  <button onClick={() => (removeSkill(skill))} className='text-light btn'>X</button></span>
              ))
              :
              <span>Nill</span>}
          </div>
        </div>
      )
      case 5: return (
        <div>
          <h3>Personal Summary</h3>
          <div className='d-flex row p-3'>
            <TextField id="standard-basic" label="Write a short summary of yourself" multiline rows={4} defaultValue={"Enthusiastic and detail-oriented Junior Full-Stack Developer with practical experience building applications using the MERN (MongoDB, Express, React, Node.js) stack. Successfully developed a full-featured e-commerce project from conception to deployment. Seeking to apply my problem-solving abilities and technical skills to create exceptional user experiences."} variant="standard" onChange={e => setUserInput({
              ...userInput, summary: e.target.value
            })} value={userInput.summary} />

          </div>
        </div>
      )
    }
  }

  return (<Box sx={{ width: '100%' }}>
    <Stepper activeStep={activeStep}>
      {steps.map((label, index) => {
        const stepProps = {};
        const labelProps = {};
        if (isStepOptional(index)) {
          labelProps.optional = (
            <Typography variant="caption">Optional</Typography>
          );
        }
        if (isStepSkipped(index)) {
          stepProps.completed = false;
        }
        return (
          <Step key={label} {...stepProps}>
            <StepLabel {...labelProps}>{label}</StepLabel>
          </Step>
        );
      })}
    </Stepper>
    {activeStep === steps.length ? (
      <React.Fragment>
        <Typography sx={{ mt: 2, mb: 1 }}>
          All steps completed - you&apos;re finished
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
          <Box sx={{ flex: '1 1 auto' }} />
          <Button onClick={handleReset}>Reset</Button>
        </Box>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
        {/* view of each step  */}
        <Box>
          {renderStepArrayContent(activeStep)}
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
          <Box sx={{ flex: '1 1 auto' }} />
          {isStepOptional(activeStep) && (
            <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
              Skip
            </Button>
          )}
          <Button onClick={handleNext}>
            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </Box>
      </React.Fragment>
    )}
  </Box>
  );
}

export default Steps