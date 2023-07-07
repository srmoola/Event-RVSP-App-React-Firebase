import { Button } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import Typography from "@mui/material/Typography";

interface Props {
  cancelAddEventCard: Function;
  resetStates: Function;
}

const CancelEventHandler = ({ cancelAddEventCard, resetStates }: Props) => {
  return (
    <Button
      fullWidth
      sx={{ marginTop: "10px", height: "100px" }}
      onClick={() => {
        cancelAddEventCard();
        resetStates();
      }}
      color="error"
    >
      <CancelIcon fontSize="large" />
      <Typography fontSize="large"> Cancel Add</Typography>
    </Button>
  );
};

export default CancelEventHandler;
