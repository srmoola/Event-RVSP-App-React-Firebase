import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import UploadAndDisplayImage from "./AddImage";

// interface Props {
//   name: string;
//   location: string;
//   descriptions: string;
//   image: string;
//   date: string;
// }

const AddEventCard = () => {
  return (
    <Card variant="outlined">
      <CardContent
        sx={{
          marginTop: { xs: "220px", md: "0px" },
          //   overflowWrap: "break-word",
          //   width: { xs: "90", md: "45%" },
        }}
      >
        <TextField
          id="standard-textarea"
          label="Event Name"
          placeholder="Event Name"
          multiline
          variant="standard"
        />
        <br></br>
        <TextField
          sx={{ marginTop: "10px" }}
          id="standard-textarea"
          label="Event Location"
          placeholder="Event Location"
          multiline
          variant="standard"
        />
        <br></br>
        <TextField
          sx={{ marginTop: "10px" }}
          id="standard-textarea"
          label="Event Description"
          placeholder="Event Description"
          multiline
          variant="standard"
        />
        <br />
        <TextField
          sx={{ marginTop: "10px" }}
          id="standard-textarea"
          label="Event Date"
          placeholder="Event Date"
          multiline
          variant="standard"
        />
      </CardContent>
    </Card>
  );
};

export default AddEventCard;
