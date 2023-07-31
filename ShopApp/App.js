import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Products from "./pages/products";
import Detail from "./pages/detail";
import Login from "./pages/login";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Login"
          component={Login}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="ProductsScreen"
          component={Products}
          options={{
            title: "Shop",
            headerStyle: { backgroundColor: "#c11" },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="DetailScreen"
          component={Detail}
          options={{
            title: "Detail",
            headerStyle: { backgroundColor: "#c11" },
            headerTintColor: "#fff",
            headerBackTitleVisible: true,
            headerBackTitle: "Shop",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
