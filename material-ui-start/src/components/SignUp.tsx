import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { auth } from '../firebase';

interface Props {
    cta: string;
    eventName: string;
    description: string;
}

export default function SignUp({ cta, eventName, description }: Props) {
    const [open, setOpen] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

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
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                {cta}
            </Button>

            <Dialog open={open} onClose={handleClose}>
                <div style={{ backgroundColor: "#4280af33" }}>
                    <DialogTitle><div style={{ marginBottom: "10px" }}>{eventName} Sign Up </div>{description}</DialogTitle>
                </div>
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
                        defaultValue={auth.currentUser?.phoneNumber || null}
                    />

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Register</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}