import { getDatabase, ref, set } from "firebase/database";
import app from "../config/firebase";

const db = getDatabase(app);

const usePost = (room) => {
  const post = () => {
    set(ref(db, "rooms/" + room.roomId), {
      name: room.name,
      id: room.roomId
    });
  };

  return { post };
};

export default usePost;
