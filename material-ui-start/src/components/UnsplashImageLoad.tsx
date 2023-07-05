import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";

const UnsplashImageLoad = () => {
  return (
    <Box
      style={{
        backgroundColor: "#d9e5ef",
        width: "400px",
        height: "250px",
        display: "grid",
        placeItems: "center",
      }}
    >
      <InsertPhotoIcon fontSize="large" />
      <Typography fontSize="large">
        Type in an event name to get an image!
      </Typography>
    </Box>
  );
};

export default UnsplashImageLoad;
