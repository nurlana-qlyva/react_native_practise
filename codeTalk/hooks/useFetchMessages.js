import { getDatabase, ref, onValue } from "firebase/database";
import app from "../config/firebase";
import { useEffect, useState } from "react";

const db = getDatabase(app);

const useFetchMessages = (roomId) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    return onValue(ref(db, "rooms/" + roomId + "/message"), (snapshot) => {
      const data = snapshot.val() || {};
      const items = { ...data };

      setMessages(Object.values(items));
    });
  }, []);

  return messages;
};

export default useFetchMessages;
