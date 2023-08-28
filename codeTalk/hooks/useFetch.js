import { getDatabase, ref, onValue } from "firebase/database";
import app from "../config/firebase";

const db = getDatabase(app);

const useFetch = (roomId) => {
  const get = () => {
    onValue(ref(db, "rooms/" + roomId), (snapshot) => {
      console.log(snapshot);
      const data = snapshot.val();
    //   updateStarCount(postElement, data);
    });
  };

  return { get };
};

export default useFetch;
