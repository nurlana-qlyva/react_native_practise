import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "../pages/Welcome";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome}/>
        <Stack.Screen name="Signup" component={Signup}/>
        <Stack.Screen name="Signin" component={Signin}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStack;
