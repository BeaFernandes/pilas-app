import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ProductInfo from "../ProductInfo";
import ItensCounter from "./ItensCounter";
import BuyButton from "./BuyButton";

export default function index({ name, price }) {
  return (
    <View style={styles.container}>
      <View style={styles.product}>
        <ProductInfo name={name} price={price} />
      </View>
      <ItensCounter />
      <BuyButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    borderColor: "#E5E5E5",
    borderBottomWidth: 1,
  },
  product: {
    width: "40%",
  },
});
