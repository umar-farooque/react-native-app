import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigation from "./navigation/DrawerNavigation";
import { Provider } from "react-redux";
import store from "./store/store";

export default function App() {
  return (
    <Provider store={store()}>
      <NavigationContainer>
        <DrawerNavigation />
      </NavigationContainer>
    </Provider>
  );
}
