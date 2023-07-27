import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Products from "./pages/products";
import Detail from "./pages/detail";

const Stack = createNativeStackNavigator();

const App = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ProductsScreen" component={Products} />
        <Stack.Screen name="DetailScreen" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
