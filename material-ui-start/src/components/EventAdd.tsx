import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

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
        />
      </CardContent>
      <Button
        sx={{ marginTop: "10px" }}
        onClick={(e) => {
          onClicks(e);
          hideCard(false);
          resetStates();
        }}
      >
        Add
      </Button>
    </Card>
  );
};

export default AddEventCard;
