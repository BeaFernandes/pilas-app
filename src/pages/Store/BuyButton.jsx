import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";

export default function BuyButton() {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="basket" size={32} color="#36A7D0" />
    </View>
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
