import { View, Text, StyleSheet } from "react-native";
import React from "react";
import SearchButton from "./SearchButton";

export default function ProductsHeader({ titleComponent }) {
  return (
    <View style={styles.container}>
      <View>{titleComponent}</View>
      <SearchButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  color: {
    color: "#fff",
  },
});
