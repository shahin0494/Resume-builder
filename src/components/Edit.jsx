import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { CgPokemon } from 'react-icons/cg'
import { TextField } from '@mui/material';




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

function Edit() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                                <TextField id="standard-basic-name" label="Full Name" variant="standard" />
                                <TextField id="standard-basic-job" label="Job Title" variant="standard" />
                                <TextField id="standard-basic-location" label="Location" variant="standard" />
                            </div>
                        </div>
                        {/* contact details */}
                        <h3>Contact Details</h3>
                        <div className='d-flex row p-3'>
                            <TextField id="standard-basic-mail" label="Email" variant="standard" />
                            <TextField id="standard-basic-phone" label="Phone No" variant="standard" />
                            <TextField id="standard-basic-git" label="Github Profile Link" variant="standard" />
                            <TextField id="standard-basic-linkedin" label="LinkedIn Profile Link" variant="standard" />
                            <TextField id="standard-basic-port" label=" Portfolio Link" variant="standard" />
                        </div>
                        {/* Education Details */}
                        <h3>Education Details</h3>
                        <div className='d-flex row p-3'>
                            <TextField id="standard-basic-course" label="Course Name" variant="standard" />
                            <TextField id="standard-basic-clg" label="College Name" variant="standard" />
                            <TextField id="standard-basic-univ" label="University Name" variant="standard" />
                            <TextField id="standard-basic-pass" label="Year of Passout " variant="standard" />
                        </div>
                        {/* Professional Details */}
                        <h3>Professional Details</h3>
                        <div className='d-flex row p-3'>
                            <TextField id="standard-basic-role" label="Job Role" variant="standard" />
                            <TextField id="standard-basic-cname" label="Company Name" variant="standard" />
                            <TextField id="standard-basic-cloc" label="Company Location" variant="standard" />
                            <TextField id="standard-basic-dur" label="Duration" variant="standard" />
                        </div>
                        {/* skills */}
                        <h3>Skills</h3>
                        <div className='d-flex align-items-center justify-content-between  p-3'>
                            <TextField sx={{ width: '400px' }} id="standard-basic" label="Add Skill" variant="standard" />
                            <Button variant="text">Add</Button>
                        </div>
                        <h5>Added Skills</h5>
                        <div className="d-flex flex-wrap justify-content-between my-3">
                            {/* span must duplicate according to user adding skill */}
                            <span className='btn btn-primary d-flex  justify-content-between my-3' >React <button className='text-light btn'>X</button></span>
                        </div>
                        {/* summary */}
                        <h3>Personal Summary</h3>
                        <div className='d-flex row p-3'>
                            <TextField id="standard-basic" label="Write a short summary of yourself" multiline rows={4} variant="standard" />
                        </div>
                    </Typography>
                    <Button>Update</Button>
                </Box>
            </Modal>
        </>
    )
}

export default Edit