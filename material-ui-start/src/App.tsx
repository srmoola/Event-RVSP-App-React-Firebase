import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import ResponsiveAppBar from "./components/NavBar";
import Events from "./components/Events";
import { Button } from "@mui/material";
import AddEventCard from "./components/EventAdd";
import RemoveEvent from "./components/RemoveEvent";

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
  const [removeEventToggle, setremoveEventToggle] = useState<boolean>(false);

  const [eventName, seteventName] = useState<Items>({
    name: "",
    location: "",
    descriptions: "",
    date: "",
  });

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

  function addComponent(): void {
    setComponents([
      ...components,
      {
        id: crypto.randomUUID(),
        name: eventName.name,
        location: eventName.location,
        descriptions: eventName.descriptions,
        date: eventName.date,
      },
    ]);
  }

  function addEventCardTemp(): void {
    setaddEvent(true);
  }

  function cancelAddEventCard(): void {
    setaddEvent(false);
  }

  function removeEventCardTemp(): void {
    setremoveEventToggle(true);
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
          <AddEventCard
            giveInfo={seteventName}
            onClicks={addComponent}
            hideCard={setaddEvent}
          />
        </Container>
      )}

      {!addEvent ? (
        <>
          <Button sx={{ marginTop: "10px" }} onClick={addEventCardTemp}>
            Add Event
          </Button>

          {components.length > 0 ? (
            <Button sx={{ marginTop: "10px" }} onClick={removeEventCardTemp}>
              Remove Events
            </Button>
          ) : (
            ""
          )}
        </>
      ) : (
        <>
          <Button sx={{ marginTop: "10px" }} onClick={cancelAddEventCard}>
            Cancel Event
          </Button>
        </>
      )}

      {removeEventToggle && <RemoveEvent getComponents={components} />}
    </Container>
  );
}

export default App;
