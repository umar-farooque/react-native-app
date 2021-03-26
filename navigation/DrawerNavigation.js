import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawerScreen from "../Screens/CustomDrawerScreen";
import HomeScreen from "../Screens/HomeScreen";
import ContactScreen from "../Screens/ContactScreen";
import AboutScreen from "../Screens/AboutScreen";
import StackNavigator from "./StackNavigator";

let Drawer = createDrawerNavigator();

function DrawerNavigation(props) {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerScreen {...props} />}
    >
      <Drawer.Screen name="Home" component={StackNavigator} />
      {/* <Drawer.Screen name="ContactUs" component={ContactScreen} />
      <Drawer.Screen name="AboutUs" component={AboutScreen} /> */}
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;
