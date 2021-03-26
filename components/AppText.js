import React from "react";
import { Text, StyleSheet } from "react-native";

function AppText({ children, style, lines, onPress }) {
  return (
    <Text
      style={[styles.text, style]}
      numberOfLines={lines}
      ellipsizeMode="tail"
      onPress={onPress}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: { fontSize: 20 },
});

export default AppText;
