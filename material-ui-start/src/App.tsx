import { useState, useEffect, Key } from "react";
import Container from "@mui/material/Container";
import ResponsiveAppBar from "./components/NavBar";
import Events from "./components/Events";
import AddEventCard from "./components/EventAdd";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { firestore } from "./firebase";
import AddEventHandler from "./components/AddEventHandler";
import CancelEventHandler from "./components/CancelEventHandler";

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
  const admins: string[] = ["smoolagani@gmail.com"];

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
    const timer = setTimeout(() => {
      setShouldRender(!shouldRender);
      getEventList();
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
      await addDoc(eventFireBaseRef, componentData);
      getEventList();
    } catch (e) {
      console.log(e);
    }
  };

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
        {eventList.map(
          (components: {
            id: Key | null | undefined;
            name: string;
            location: string;
            descriptions: string;
            image: string;
            date: string;
          }) => (
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
          )
        )}
      </div>

      {addEvent && (
        <AddEventCard
          imageQuery={eventName.image}
          giveInfo={seteventName}
          onClicks={addComponent}
          hideCard={setaddEvent}
        />
      )}

      {!addEvent ? (
        <AddEventHandler showAddCard={addEventCardTemp} eventList={eventList} />
      ) : (
        <CancelEventHandler
          cancelAddEventCard={cancelAddEventCard}
          resetStates={resetStates}
        />
      )}
    </Container>
  );
}

export default App;
