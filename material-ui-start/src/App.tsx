import { useState, useEffect, Key } from "react";
import Container from "@mui/material/Container";
import ResponsiveAppBar from "./components/NavBar";
import Events from "./components/Events";
import { Button } from "@mui/material";
import AddEventCard from "./components/EventAdd";
import AddIcon from "@mui/icons-material/Add";
import CancelIcon from "@mui/icons-material/Cancel";
import CancelOverlay from "./components/CancelOverlay";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { firestore } from "./firebase";


export interface Items {
  id?: string;
  name: string;
  location: string;
  descriptions: string;
  image?: any;
  date: string;
}

function App() {

  const imageurl = useSelector((state: any) => state.imageurl.value);
  const eventFireBaseRef = collection(firestore, "EventList");
  const [addEvent, setaddEvent] = useState<boolean>(false);
  const [eventName, seteventName] = useState<Items>({
    name: "",
    location: "",
    descriptions: "",
    date: "",
    image: "",
  });
  const [eventList, setEventList] = useState<any>([]);
  const [shouldRender, setShouldRender] = useState(false);

  const getEventList = async () => {
    try {
      const data = await getDocs(eventFireBaseRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setEventList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getEventList();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldRender(true);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);




  const resetStates = () => {
    seteventName({
      name: "",
      location: "",
      descriptions: "",
      date: "",
      image: "",
    });
  };

  const addComponent = async () => {

    const componentData = {
      name: eventName.name,
      location: eventName.location,
      descriptions: eventName.descriptions,
      date: eventName.date,
      image: imageurl,
    };

    try {
      await addDoc(eventFireBaseRef, componentData)
      getEventList();
    } catch (e) {
      console.log(e);
    }

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
      <br />

      <div>
        {eventList.map((components: { id: Key | null | undefined; name: string; location: string; descriptions: string; image: string; date: string; }) => (
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

          {eventList.length > 0 ? (
            <CancelOverlay
              getComponents={eventList}
              setgetComponents={setEventList}
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
