import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CancelOverlay from "../components/CancelOverlay";
import Typography from "@mui/material/Typography";

interface Props {
  showAddCard: Function;
  eventList: any;
}

const AddEventHandler = ({ showAddCard, eventList }: Props) => {
  return (
    <>
      <Button
        fullWidth
        sx={{ marginTop: "10px", height: "100px", color: "#8c1515", borderColor: "#8c1515"}}
        color="error"
        onClick={() => {
          showAddCard();
        }}
        variant="outlined"
        
      >
        <AddIcon fontSize="large" />
        <Typography fontSize="large">Add Event</Typography>
      </Button>

      {eventList.length > 0 ? <CancelOverlay getComponents={eventList} /> : ""}
    </>
  );
};

export default AddEventHandler;
