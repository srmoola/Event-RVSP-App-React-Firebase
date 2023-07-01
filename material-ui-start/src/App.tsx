import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import ResponsiveAppBar from "./components/NavBar";
import Events from "./components/Events";
import { Button } from "@mui/material";
import AddEventCard from "./components/EventAdd";
import AddIcon from "@mui/icons-material/Add";
import CancelIcon from "@mui/icons-material/Cancel";
import CancelOverlay from "./components/CancelOverlay";
import Typography from "@mui/material/Typography";

export interface Items {
  id?: string;
  name: string;
  location: string;
  descriptions: string;
  image?: any;
  date: string;
}

function App() {
  const [components, setComponents] = useState<Items[]>([]);
  const [addEvent, setaddEvent] = useState<boolean>(false);
  const [eventName, seteventName] = useState<Items>({
    name: "",
    location: "",
    descriptions: "",
    date: "",
    image: "",
  });
  const [imageQuery, setimageQuery] = useState<string>("");
  console.log(imageQuery);

  // const [dataLoaded, setDataLoaded] = useState<boolean>(false);

  // useEffect(() => {
  //   const storedComponents = localStorage.getItem("key");
  //   if (storedComponents) {
  //     setComponents(JSON.parse(storedComponents));
  //   }
  //   setDataLoaded(true);
  // }, []);

  // useEffect(() => {
  //   if (dataLoaded) {
  //     localStorage.setItem("key", JSON.stringify(components));
  //   }
  // }, [components, dataLoaded]);

  const resetStates = () => {
    seteventName({
      name: "",
      location: "",
      descriptions: "",
      date: "",
      image: "",
    });
  };

  function addComponent(): void {
    setComponents([
      ...components,
      {
        id: crypto.randomUUID(),
        name: eventName.name,
        location: eventName.location,
        descriptions: eventName.descriptions,
        date: eventName.date,
        image: imageQuery,
      },
    ]);
  }

  function addEventCardTemp(): void {
    setaddEvent(true);
  }

  function cancelAddEventCard(): void {
    setaddEvent(false);
  }

  return (
    <Container maxWidth="xl">
      <ResponsiveAppBar />
      <br></br>

      <div>
        {components.map((components) => (
          <div key={components.id}>
            <br />
            <Events
              name={components.name}
              location={components.location}
              descriptions={components.descriptions}
              image={components.image}
              date={components.date}
            />
          </div>
        ))}
      </div>

      {addEvent && (
        <div>
          <br></br>
          <AddEventCard
            setImageQuery={setimageQuery}
            imageQuery={eventName.image}
            giveInfo={seteventName}
            onClicks={addComponent}
            hideCard={setaddEvent}
          />
        </div>
      )}

      {!addEvent ? (
        <>
          <Button
            fullWidth
            sx={{ marginTop: "10px", height: "100px" }}
            onClick={addEventCardTemp}
            variant="outlined"
          >
            <AddIcon fontSize="large" />
            <Typography fontSize="large">Add Event</Typography>
          </Button>

          {components.length > 0 ? (
            <CancelOverlay
              getComponents={components}
              setgetComponents={setComponents}
            />
          ) : (
            ""
          )}
        </>
      ) : (
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
      )}
    </Container>
  );
}

export default App;
