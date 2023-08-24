import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

const auth = getAuth();

export const useAuthentication = () => {
  const [user, setUser] = useState({});
  console.log(user)

  useEffect(() => {
    const unsubscribeFromAuthStatuChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(undefined);
      }
    });

    return unsubscribeFromAuthStatuChanged;
  }, []);

  return user;
};
