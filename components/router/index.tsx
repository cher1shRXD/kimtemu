import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home";
import Shorts from "../screens/shorts";
import Make from "../screens/make";
import Search from "../screens/search";
import Profile from "../screens/profile";
import Tabs from "../tabs";

const Router = () => {
  const TabScreen = createBottomTabNavigator();

  return (
    <TabScreen.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarStyle: { display: "none" },
        headerShown: false,
      }}
      tabBar={props=> <Tabs {...props}/> }
    >
      <TabScreen.Screen name="HomeScreen" component={Home} />
      <TabScreen.Screen name="ShortsScreen" component={Shorts} />
      <TabScreen.Screen name="MakeScreen" component={Make} />
      <TabScreen.Screen name="SearchScreen" component={Search} />
      <TabScreen.Screen name="ProfileScreen" component={Profile} />
    </TabScreen.Navigator>
  );
};

export default Router;
