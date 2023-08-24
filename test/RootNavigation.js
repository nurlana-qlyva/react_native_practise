import "./config/firebase";
import { useAuthentication } from "./hooks/useAuthentication";

import AuthStack from "./screens/AuthStack";
import UserStack from "./screens/UserStack";

export default function RootNavigation() {
  const user = useAuthentication();

  return user ? <UserStack /> : <AuthStack />;
}
