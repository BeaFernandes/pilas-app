import { StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";

export default function BuyButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <MaterialCommunityIcons name="basket" size={32} color="#36A7D0" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
  bt: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
});
