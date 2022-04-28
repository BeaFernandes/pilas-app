import { View, Image, StyleSheet } from "react-native";
import React from "react";

export default function SearchButton() {
  return (
    <Image
      source={require("../../../assets/images/search.png")}
      style={styles.image}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30,
  },
});
