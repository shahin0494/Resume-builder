import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { CgPokemon } from 'react-icons/cg'
import { TextField } from '@mui/material';
import { editResumeApi, getAResumeAPI } from '../services/allApi';
import swal from 'sweetalert';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    maxHeight: '80vh',
    overflowY: 'auto',
    bgcolor: 'background.paper',
    border: '2px solid grey',
    boxShadow: 24,
    p: 4,
};

function Edit({ resumeId, setUpdateUserInput }) {

    const [userSkill, setUserSkill] = React.useState("")

    const [userInput, setUserInput] = React.useState({})
    const [open, setOpen] = React.useState(false);

    console.log(resumeId);

    React.useEffect(() => {
        resumeId && getEditResumeDetails()
    }, { resumeId })

    const getEditResumeDetails = async () => {
        try {
            const result = await getAResumeAPI(resumeId)
            setUserInput(result?.data)
        } catch (err) {
            console.log(err);
        }
    }

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    console.log(userInput);

    const addSkill = () => {
        if (userSkill) {
            if (userInput.skills.includes(userSkill)) {
                alert("GIVEN SKILL IS ALREADY EXISTING ADD A NEW SKILL")
            } else {
                setUserInput({ ...userInput, skills: [...userInput.skills, userSkill] })
            }
            setUserSkill('')
        }
    }

    const removeSkill = (delskill) => {
        setUserInput({ ...userInput, skills: userInput.skills.filter(item => item != delskill) })
    }

    const handleResumeUpdate = async () => {
        try {
            const result = await editResumeApi(userInput?.id, userInput)
            setUpdateUserInput(result?.data)
            swal("Success!", "Resume Updated Successfully!", "success")
            handleClose()

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <button onClick={handleOpen} className='btn fs-1' style={{ color: 'red' }}> <CgPokemon /></button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Edit details
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {/* personal details */}
                        <div>
                            <h3>Personal Details</h3>
                            <div className='d-flex row p-3'>
                                <TextField id="standard-basic-name" label="Full Name" variant="standard" onChange={e => setUserInput({
                                    ...userInput, personalData: { ...userInput.personalData, name: e.target.value }
                                })} value={userInput?.personalData?.name} />
                                <TextField id="standard-basic-job" label="Job Title" variant="standard" onChange={e => setUserInput({
                                    ...userInput, personalData: { ...userInput.personalData, jobTitle: e.target.value }
                                })} value={userInput?.personalData?.jobTitle} />
                                <TextField id="standard-basic-location" label="Location" variant="standard" onChange={e => setUserInput({
                                    ...userInput, personalData: { ...userInput.personalData, location: e.target.value }
                                })} value={userInput?.personalData?.location} />
                            </div>
                        </div>
                        {/* contact details */}
                        <h3>Contact Details</h3>
                        <div className='d-flex row p-3'>
                            <TextField id="standard-basic-mail" label="Email" variant="standard" onChange={e => setUserInput({
                                ...userInput, personalData: { ...userInput.personalData, email: e.target.value }
                            })} value={userInput?.personalData?.email} />
                            <TextField id="standard-basic-phone" label="Phone No" variant="standard" onChange={e => setUserInput({
                                ...userInput, personalData: { ...userInput.personalData, phone: e.target.value }
                            })} value={userInput?.personalData?.phone} />
                            <TextField id="standard-basic-git" label="Github Profile Link" variant="standard" onChange={e => setUserInput({
                                ...userInput, personalData: { ...userInput.personalData, github: e.target.value }
                            })} value={userInput?.personalData?.github} />
                            <TextField id="standard-basic-linkedin" label="LinkedIn Profile Link" variant="standard" onChange={e => setUserInput({
                                ...userInput, personalData: { ...userInput.personalData, linkedin: e.target.value }
                            })} value={userInput?.personalData?.linkedin} />
                            <TextField id="standard-basic-port" label=" Portfolio Link" variant="standard" onChange={e => setUserInput({
                                ...userInput, personalData: { ...userInput.personalData, portfolio: e.target.value }
                            })} value={userInput?.personalData?.portfolio} />
                        </div>
                        {/* Education Details */}
                        <h3>Education Details</h3>
                        <div className='d-flex row p-3'>
                            <TextField id="standard-basic-course" label="Course Name" variant="standard" onChange={e => setUserInput({
                                ...userInput, educationalData: { ...userInput.educationalData, course: e.target.value }
                            })} value={userInput?.educationalData?.course} />
                            <TextField id="standard-basic-clg" label="College Name" variant="standard" onChange={e => setUserInput({
                                ...userInput, educationalData: { ...userInput.educationalData, college: e.target.value }
                            })} value={userInput?.educationalData?.college} />
                            <TextField id="standard-basic-univ" label="University Name" variant="standard" onChange={e => setUserInput({
                                ...userInput, educationalData: { ...userInput.educationalData, university: e.target.value }
                            })} value={userInput?.educationalData?.university} />
                            <TextField id="standard-basic-pass" label="Year of Passout " variant="standard" onChange={e => setUserInput({
                                ...userInput, educationalData: { ...userInput.educationalData, year: e.target.value }
                            })} value={userInput?.educationalData?.year} />
                        </div>
                        {/* Professional Details */}
                        <h3>Professional Details</h3>
                        <div className='d-flex row p-3'>
                            <TextField id="standard-basic-role" label="Job Role" variant="standard" onChange={e => setUserInput({
                                ...userInput, experience: { ...userInput.experience, jobRole: e.target.value }
                            })} value={userInput?.experience?.jobRole} />
                            <TextField id="standard-basic-cname" label="Company Name" variant="standard" onChange={e => setUserInput({
                                ...userInput, experience: { ...userInput.experience, company: e.target.value }
                            })} value={userInput?.experience?.company} />
                            <TextField id="standard-basic-cloc" label="Company Location" variant="standard" onChange={e => setUserInput({
                                ...userInput, experience: { ...userInput.experience, joblocation: e.target.value }
                            })} value={userInput?.experience?.joblocation} />
                            <TextField id="standard-basic-dur" label="Duration" variant="standard" onChange={e => setUserInput({
                                ...userInput, experience: { ...userInput.experience, duration: e.target.value }
                            })} value={userInput?.experience?.duration} />
                        </div>
                        {/* skills */}
                        <h3>Skills</h3>
                        <div className='d-flex align-items-center justify-content-between  p-3'>
                            <TextField onChange={e => setUserSkill(e.target.value)} sx={{ width: '100%', }} id="standard-basic" label="Add Skill" variant="standard" value={userSkill} />
                            <Button onClick={addSkill} variant="text">Add</Button>
                        </div>
                        <h6>Selected Skills</h6>
                        <div className='d-flex my-4 flex-wrap ' >

                            {
                                userInput?.skills?.length > 0 &&
                                userInput?.skills?.map(item => (
                                    <span key={item} className='btn btn-outline-primary d-flex align-items-center justify-content-center me-2'>{item}
                                        <button onClick={() => removeSkill(item)} className='text-light btn'>X</button>
                                    </span>

                                ))
                            }
                        </div>

                        {/* summary */}
                        <h3>Personal Summary</h3>
                        <div className='d-flex row p-3'>
                            <TextField id="standard-basic" label="Write a short summary of yourself" multiline rows={4} variant="standard" onChange={e => setUserInput({ ...userInput, summary: e.target.value })} value={userInput?.summary} />
                        </div>
                    </Typography>
                    <Button onClick={handleResumeUpdate}>Update</Button>
                </Box>
            </Modal>
        </>
    )
}

export default Edit