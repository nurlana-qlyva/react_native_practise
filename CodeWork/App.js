import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Jobs from "./pages/jobs";
import FavouriteJobs from "./pages/favourite-jobs";
import Detail from "./pages/detail";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Provider } from "react-redux";
import { store } from "./store/store";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const JobsStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="JobsScreen"
        component={Jobs}
        options={{
          headerTitle: "Jobs",
          headerTintColor: "#c11",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="DetailScreen"
        component={Detail}
        options={{ headerTitle: "Jobs" }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="JobsTabScreen"
            component={JobsStackScreen}
            options={{
              headerShown: false,
              tabBarLabel: "Jobs",
              tabBarIcon: ({ color, size }) => {
                return <Ionicons name="bookmarks" color={color} size={size} />;
              },
              tabBarActiveTintColor: "#c11",
              tabBarInactiveTintColor: "#000",
            }}
          />
          <Tab.Screen
            name="FavouriteJobsScreen"
            component={FavouriteJobs}
            options={{
              headerTitle: "Favorite Jobs",
              tabBarLabel: "Favorite Jobs",
              tabBarIcon: ({ color, size }) => {
                return <Ionicons name="heart" color={color} size={size} />;
              },
              tabBarActiveTintColor: "#c11",
              tabBarInactiveTintColor: "#000",
              tabBarBadge: 3,
              tabBarBadgeStyle: { backgroundColor: "#444", fontSize: 12 },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
