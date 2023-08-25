import "./config/firebase";
import { useAuthentication } from "./hooks/useAuthentication";

import { AuthScreen } from "./screens/AuthScreen";
import { UserScreen } from "./screens/UserScreen";

const RootNavigation = () => {
  const user = useAuthentication();

  return user ? <UserScreen /> : <AuthScreen />;
};

export default RootNavigation;
