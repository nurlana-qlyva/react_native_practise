import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector, useDispatch } from "react-redux";
import { setUser, setLoading } from "./store/auth/authSlice";
import { Icon } from "react-native-vector-icons/MaterialCommunityIcons";

// pages
import Products from "./pages/products";
import Detail from "./pages/detail";
import Login from "./pages/login";
import { Button } from "react-native";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const user = useSelector((state) => state.auth.user);
  console.log(user)

  const dispatch = useDispatch();

  useEffect(() => {
    AsyncStorage.getItem("@User").then((userSession) => {
      userSession && dispatch(setUser(JSON.parse(userSession)));
      dispatch(setLoading(false));
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!user ? (
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
        ) : (
          <>
            <Stack.Screen
              name="ProductsScreen"
              component={Products}
              options={{
                title: "Shop",
                headerStyle: { backgroundColor: "#c11" },
                headerTintColor: "#fff",
                headerRight: () => <Button title="Logout" color={"#011"} onPress={() => dispatch(setUser(null))} />
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
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
