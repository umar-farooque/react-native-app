import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import AppText from "./AppText";

function Card({ id, title, body }) {
  return (
    <TouchableOpacity style={styles.container}>
      <AppText>id : {id}</AppText>
      <AppText>Title : {title}</AppText>
      <AppText>Body :{body}</AppText>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 5,
  },
});
export default Card;
