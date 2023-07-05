import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Items } from "../App";
import UnsplashImage from "./UnsplashImage";

interface Props {
  onClicks: React.MouseEventHandler<HTMLButtonElement>;
  giveInfo: React.Dispatch<React.SetStateAction<Items>>;
  hideCard: React.Dispatch<React.SetStateAction<boolean>>;
  imageQuery: string;
}

const styles = { marginTop: "10px", width: { xs: "100%", xl: "50%" } };

const AddEventCard = ({
  onClicks,
  giveInfo,
  hideCard,
  imageQuery,
}: Props) => {
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
      <Box
        sx={{
          float: "right",
          display: "inline-block",
          marginRight: { xl: "5%" },
          marginTop: { xl: "1%" },
        }}
      >
        <UnsplashImage query={imageQuery} />
        {/* setURL={setImageQuery}  */}
      </Box>
      <CardContent
        sx={{
          marginTop: { xs: "220px", md: "0px" },
        }}
      >
        <TextField
          id = "1"
          sx={{ width: styles.width }}
          onChange={handleInputChange}
          name="name"
          label="Event Name"
          placeholder="Event Name"
          variant="standard"
          required
        />
        <br></br>
        <TextField
          id = "2"
          onChange={handleInputChange}
          sx={styles}
          name="location"
          label="Event Location"
          placeholder="Event Location"
          multiline
          variant="standard"
          required
        />
        <br></br>
        <TextField
          id = "3"
          onChange={handleInputChange}
          sx={styles}
          name="descriptions"
          label="Event Description"
          placeholder="Event Description"
          multiline
          variant="standard"
          required
        />
        <br />
        <TextField
          id = "4"
          onChange={handleInputChange}
          sx={styles}
          name="date"
          label="Event Date"
          placeholder="Event Date"
          multiline
          variant="standard"
          required
        />
        <br />
        <TextField
          id = "5"
          onChange={handleInputChange}
          sx={styles}
          name="image"
          label="Image"
          placeholder="Search for an image to use!"
          multiline
          variant="standard"
          required
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
