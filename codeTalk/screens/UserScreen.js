import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";

import Rooms from "../pages/rooms/Rooms";
import Room from "../pages/chat-room/Room";

const Stack = createNativeStackNavigator();

export const UserScreen = () => {
  const roomData = useSelector((state) => state.room.data);
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Rooms"
          component={Rooms}
          options={{
            headerTintColor: "#f81",
            headerTitleAlign: "center",
            headerTitle: "Rooms",
          }}
        />
        <Stack.Screen
          name="Room"
          component={Room}
          options={{
            headerTintColor: "#f81",
            headerTitleAlign: "center",
            headerTitle: roomData.title,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
