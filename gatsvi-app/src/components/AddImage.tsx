import { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <Container
        sx={{
          float: "right",
          height: "100%",
          width: "100%",
          maxWidth: { xs: "100%", xl: "50%" },
        }}
      >
        {selectedImage && (
          <div>
            <img alt="not found" src={URL.createObjectURL(selectedImage)} />
            <br />
            {/* <button onClick={() => setSelectedImage(null)}>Remove</button> */}
          </div>
        )}
        <br />
      </Container>
      <input
        type="file"
        name="myImage"
        onChange={(event: any) => {
          setSelectedImage(event.target.files[0]);
        }}
      />
    </>
  );
};

export default UploadAndDisplayImage;
