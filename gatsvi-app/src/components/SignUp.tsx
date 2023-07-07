import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/material';
import { auth } from '../firebase';
import emailjs from '@emailjs/browser';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface Props {
    cta: string;
    eventName: string;
    description: string;
}

export default function SignUp({ cta, eventName, description }: Props) {
    const [open, setOpen] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState<string>(auth.currentUser?.email || "");
    const [phonenumber, setPhoneNumber] = useState<string>(
        auth.currentUser?.phoneNumber || ""
    );
    const [isEmailSent, setIsEmailSent] = useState(false); // New state variable

    useEffect(() => {
        if (auth.currentUser) {
            const displayName = auth.currentUser.displayName || "";
            const displayNameParts = displayName.split(" ");
            const firstName = displayNameParts[0];
            const lastName = displayNameParts[1] || "";
            setFirstName(firstName);
            setLastName(lastName);
        }
    }, []);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setIsEmailSent(false); // Reset the email sent status when the dialog is closed
    };

    const sendEmails = () => {
        emailjs
            .send("service_jhozbjg", "template_5wrjweg", {
                event: eventName,
                firstname: firstName,
                lastname: lastName,
                email_id: email,
                number: phonenumber,
            }, "BgO0nF3MBZZeDeshV")
            .then((result) => {
                console.log(result.text);
                setIsEmailSent(true); // Set the email sent status to true
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>

            {!isEmailSent ? <><Button variant="outlined" onClick={handleClickOpen}>
                {cta}
            </Button> <Dialog open={open} onClose={handleClose}>
                    <Box style={{ backgroundColor: "#4280af33" }} sx={{ overflowY: "scroll" }}>
                        <DialogTitle ><div style={{ marginBottom: "10px", fontSize: "24px", textDecoration: "underline" }}>{eventName} Sign Up </div>{description}</DialogTitle>
                    </Box>
                    <DialogContent>
                        <DialogContentText>
                            To register for this event, please enter the following information. If you are logged in, please make sure all information is correct.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="firstname"
                            label="First Name"
                            type="text"
                            fullWidth
                            variant="standard"
                            defaultValue={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            sx={{ marginTop: "25px" }}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="lastname"
                            label="Last Name"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={(e) => setLastName(e.target.value)}
                            defaultValue={lastName}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="emailadress"
                            label="Email Address"
                            type="email"
                            fullWidth
                            variant="standard"
                            onChange={(e) => setEmail(e.target.value)}
                            defaultValue={auth.currentUser?.email || ""}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="phonenumber"
                            label="Phone Number"
                            type="number"
                            fullWidth
                            variant="standard"
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            defaultValue={auth.currentUser?.phoneNumber || null}
                        />

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={() => { sendEmails() }}>Register</Button>
                    </DialogActions>
                </Dialog> </> :
                <Button sx={{color: "green", borderColor: "green"}} variant="outlined">
                    <CheckCircleIcon />&nbsp;Registered
                </Button>}

        </div>
    );
}