import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import { Items } from "../App";

interface Props {
  onClicks: React.MouseEventHandler<HTMLButtonElement>;
  giveInfo: React.Dispatch<React.SetStateAction<Items>>;
  hideCard: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddEventCard = ({ onClicks, giveInfo, hideCard }: Props) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    giveInfo((prevState) => ({
      ...prevState,
      [name]: value, // Update the specific string value using the input name
    }));
  };

  const resetStates = () => {
    giveInfo({
      name: "",
      location: "",
      descriptions: "",
      date: "",
    });
  };

  return (
    <Card variant="outlined">
      <CardContent
        sx={{
          marginTop: { xs: "220px", md: "0px" },
        }}
      >
        <TextField
          onChange={handleInputChange}
          name="name"
          label="Event Name"
          placeholder="Event Name"
          variant="standard"
          required
          fullWidth
        />
        <br></br>
        <TextField
          onChange={handleInputChange}
          sx={{ marginTop: "10px" }}
          name="location"
          label="Event Location"
          placeholder="Event Location"
          multiline
          variant="standard"
          required
          fullWidth
        />
        <br></br>
        <TextField
          onChange={handleInputChange}
          sx={{ marginTop: "10px" }}
          name="descriptions"
          label="Event Description"
          placeholder="Event Description"
          multiline
          variant="standard"
          required
          fullWidth
        />
        <br />
        <TextField
          onChange={handleInputChange}
          sx={{ marginTop: "10px" }}
          name="date"
          label="Event Date"
          placeholder="Event Date"
          multiline
          variant="standard"
          required
          fullWidth
        />
      </CardContent>
      <Button
        fullWidth
        sx={{ marginTop: "10px", height: "100px" }}
        onClick={(e) => {
          onClicks(e);
          hideCard(false);
          resetStates();
        }}
      >
        <AddIcon fontSize="large" />
        <Typography fontSize="large">Confirm Add</Typography>
      </Button>
    </Card>
  );
};

export default AddEventCard;
