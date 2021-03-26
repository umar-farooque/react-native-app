import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ContactScreen from "../Screens/ContactScreen";
import HomeScreen from "../Screens/HomeScreen";
import AboutScreen from "../Screens/AboutScreen";
import Hamburger from "../components/Hamburger";
import { useNavigation } from "@react-navigation/native";

let Stack = createStackNavigator();
function StackNavigator(props) {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerLeft: () => (
            <Hamburger onPress={() => navigation.openDrawer()} />
          ),
        }}
      />
      <Stack.Screen name="ContactUs" component={ContactScreen} />
      <Stack.Screen name="AboutUs" component={AboutScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
