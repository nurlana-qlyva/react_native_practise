import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Jobs from "./pages/jobs";
import FavouriteJobs from "./pages/favourite-jobs";
import Detail from "./pages/detail";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const JobsStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="JobsScreen" component={Jobs}/>
      <Stack.Screen name="DetailScreen" component={Detail} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="JobsScreen" component={JobsStackScreen} options={{headerShown:false}}/>
        <Tab.Screen name="FavouriteJobsScreen" component={FavouriteJobs} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
