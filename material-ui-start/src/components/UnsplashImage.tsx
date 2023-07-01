import React, { useEffect, useState } from "react";
import { createApi } from "unsplash-js";
import Typography from "@mui/material/Typography";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import Box from "@mui/material/Box";

type Photo = {
  query?: string;
};

type Url = {
  urls: { large: string; regular: string; raw: string; small: string };
  setURL: React.Dispatch<React.SetStateAction<string>>;
};

const api = createApi({
  accessKey: "JELp8mEy_Qroy8AJH8K_fU7gI9xSdxOSDD6HDd9JR_8",
});

const PhotoComp: React.FC<{ photo: Url }> = ({ photo }) => {
  if (!photo || !photo.urls) {
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
  }

  const { urls } = photo;

  // setURL(urls.small);

  return (
    <>
      <img className="img" src={urls.small} alt="Unsplash" />
      {console.log(urls.small)}
    </>
  );
};

const UnsplashImage = ({ query = "" }: Photo) => {
  const [data, setPhotosResponse] = useState<any>(null);

  useEffect(() => {
    api.search
      .getPhotos({ query: query, orientation: "landscape" })
      .then((result) => {
        setPhotosResponse(result);
      })
      .catch(() => {
        console.log("Oops, something went wrong!");
      });
  }, [query]);

  if (data === null && query.length < 10) {
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
  }

  if (data != null && query.length > 0) {
    const randomIndex = Math.floor(
      Math.random() * data.response.results.length
    );
    const randomPhoto = data.response.results[randomIndex];

    return (
      <div className="feed">
        <PhotoComp photo={randomPhoto} />
      </div>
    );
  }
};

export default UnsplashImage;
