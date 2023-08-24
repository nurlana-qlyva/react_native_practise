import { ThemeProvider } from "react-native-elements";
import RootNavigation from "./RootNavigation";

export default function App() {
  return (
    <ThemeProvider>
      <RootNavigation />
    </ThemeProvider>
  );
}
