import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function ProductInfo({ name, price }) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>Pila {price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  name: {
    fontWeight: "bold",
    color: "#5E5E5E",
  },
  price: {
    color: "#8D8D8D",
  },
});
