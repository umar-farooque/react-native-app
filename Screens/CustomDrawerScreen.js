import React from "react";
import { View, StyleSheet } from "react-native";
import { DrawerItem, DrawerContentScrollView } from "@react-navigation/drawer";
import { Icon } from "react-native-elements";

function CustomDrawerScreen(props) {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon
              name="home-outline"
              color={color}
              size={size}
              type="ionicon"
            />
          )}
          label="Home"
          // labelStyle={{ fontSize: 20 }}
          onPress={() => {
            props.navigation.navigate("Home");
          }}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="mail" color={color} size={size} type="ionicon" />
          )}
          label="Contact US"
          // labelStyle={{ fontSize: 20 }}
          onPress={() => {
            props.navigation.navigate("ContactUs");
          }}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="user" color={color} size={size} type="antdesign" />
          )}
          label="About Us"
          // labelStyle={{ fontSize: 20 }}
          onPress={() => {
            props.navigation.navigate("AboutUs");
          }}
        />
      </DrawerContentScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default CustomDrawerScreen;
