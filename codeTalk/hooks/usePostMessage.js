import { getDatabase, ref, set, push } from "firebase/database";
import app from "../config/firebase";

const db = getDatabase(app);

const usePostMessage = (roomId, message) => {
  const post = () => {
    set(push(ref(db, "rooms/" + roomId + "/message")), {
      message,
    });
  };

  return { post };
};

export default usePostMessage;
