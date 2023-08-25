import { Provider } from "react-redux";
import { store } from "./config/store";
import RootNavigation from "./RootNavigation";

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}
