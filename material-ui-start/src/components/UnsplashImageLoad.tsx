import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";

const UnsplashImageLoad = () => {
  return (
    <Box
      sx={{
        backgroundColor: {xl: "#d9e5ef", md: "#d9e5ef", xs: "#1876d1"},
        width: "375px",
        height: "250px",
        display: "grid",
        placeItems: "center",
        marginRight: {xl: "100px", md: "100px"},
        marginTop: {xl: "50px", md: "50px"},
      }}
    >
      <InsertPhotoIcon fontSize="large" />
      <Typography fontSize="large">
        Search for an image to show here!
      </Typography>
    </Box>
  );
};

export default UnsplashImageLoad;
