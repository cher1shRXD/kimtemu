import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home";
import Cart from "../screens/cart";
import Make from "../screens/make";
import Search from "../screens/search";
import Profile from "../screens/profile";
import Tabs from "../tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Detail from "../screens/home/stack/detail";

const HomeScreenStack = () => {
  const HomeScreen = createStackNavigator();

  return (
    <HomeScreen.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeScreen.Screen name="Home" component={Home} />
      <HomeScreen.Screen name="Detail" component={Detail} />
    </HomeScreen.Navigator>
  );
};

const Router = () => {
  const TabScreen = createBottomTabNavigator();

  return (
    <TabScreen.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarStyle: { display: "none" },
        headerShown: false,
      }}
      tabBar={(props) => <Tabs {...props} />}
    >
      <TabScreen.Screen name="HomeScreen" component={HomeScreenStack} />
      <TabScreen.Screen name="ShortsScreen" component={Cart} />
      <TabScreen.Screen name="MakeScreen" component={Make} />
      <TabScreen.Screen name="SearchScreen" component={Search} />
      <TabScreen.Screen name="ProfileScreen" component={Profile} />
    </TabScreen.Navigator>
  );
};

export default Router;
