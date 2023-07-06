import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import SignUp from "./SignUp";

interface Props {
  name: string;
  location: string;
  descriptions: string;
  image: string;
  date: string;
}

const Events = ({ name, location, descriptions, image, date }: Props) => {
  return (
    <Card variant="outlined">
      <Box
        component="img"
        sx={{
          float: "right",
          width: {xl: "40%", md: "40%", xs:"100%"},
          
        }}
        alt="Event Image"
        src={image}
      />
      <CardContent
        sx={{
          marginTop: { xs: "220px", md: "0px" },
          overflowWrap: "break-word",
          width: { xs: "90", md: "45%" },
        }}
      >
        <Typography sx={{marginTop:{xs: "50px", md: "0", xl: "0"}}} variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {location}
        </Typography>
        <Typography variant="body2">{descriptions}</Typography>
      </CardContent>
      <CardActions sx={{marginTop: {xl: "14%", md: "14%"}}}>
        <SignUp description={descriptions} eventName= {name} cta={date + " - Sign Up"}/>
      </CardActions>
    </Card>
  );
};

export default Events;
