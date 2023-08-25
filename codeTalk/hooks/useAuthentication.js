import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

const auth = getAuth();

export const useAuthentication = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const unsubscribeFromAuthStatuChanged = onAuthStateChanged(auth, (user) =>
      user ? setUser(user) : setUser(undefined)
    );

    return unsubscribeFromAuthStatuChanged;
  }, []);

  return user;
};
