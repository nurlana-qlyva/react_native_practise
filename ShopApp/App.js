import { Provider } from "react-redux";
import { store } from "./store/auth/store";
import Navigation from "./Navigation";

const App = () => {

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
