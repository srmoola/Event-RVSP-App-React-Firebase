import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import ResponsiveAppBar from "./components/NavBar";
import Events from "./components/Events";
import { Button } from "@mui/material";
import AddEventCard from "./components/EventAdd";

interface items {
  id: string;
  name: string;
  location: string;
  descriptions: string;
  image: string;
  date: string;
}

function App() {
  const [components, setComponents] = useState<items[]>([]);
  const [addEvent, setaddEvent] = useState<boolean>(false);
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

  function addComponent() {
    setComponents([
      ...components,
      {
        id: crypto.randomUUID(),
        name: "Event",
        location: "Event",
        descriptions: "event",
        date: "event",
        image:
          "https://media.istockphoto.com/id/1093110112/photo/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-of-green-forest-with-pure.jpg?s=612x612&w=0&k=20&c=lpQ1sQI49bYbTp9WQ_EfVltAqSP1DXg0Ia7APTjjxz4=",
      },
    ]);
  }

  function addEventCardTemp() {
    setaddEvent(true);
  }

  function cancelAddEventCard() {
    setaddEvent(false);
  }

  return (
    <Container maxWidth="xl">
      <ResponsiveAppBar />
      <br></br>

      <Container maxWidth="xl">
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
      </Container>

      {addEvent && (
        <Container maxWidth="xl">
          <br></br>
          <AddEventCard />
        </Container>
      )}

      {!addEvent ? (
        <Button sx={{ marginTop: "10px" }} onClick={addEventCardTemp}>
          Add Event
        </Button>
      ) : (
        <>
          <Button sx={{ marginTop: "10px" }} onClick={cancelAddEventCard}>
            Cancel Event
          </Button>
          <Button sx={{ marginTop: "10px" }} onClick={addComponent}>
            Add
          </Button>
        </>
      )}
    </Container>
  );
}

export default App;
