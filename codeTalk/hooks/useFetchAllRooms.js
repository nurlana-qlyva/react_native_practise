import { getDatabase, ref, onValue } from "firebase/database";
import app from "../config/firebase";
import { useEffect, useState } from "react";

const db = getDatabase(app);

const useFetchAllRooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    return onValue(ref(db, "rooms/"), (snapshot) => {
      const data = snapshot.val() || {};
      const items = {...data}

      setRooms(Object.values(items));
    });
  }, []);

  return rooms;
};

export default useFetchAllRooms;
