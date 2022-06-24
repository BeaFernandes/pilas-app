import { View, Text, StyleSheet } from "react-native";
import CounterInput from "react-native-counter-input";
import React, { useState } from "react";
import ProductInfo from "components/ProductInfo";
import ItensCounter from "./ItensCounter";
import BuyButton from "./BuyButton";

export default function Product({ name, price }) {
  const [amount, onChangeAmount] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.product}>
        <ProductInfo name={name} price={price} />
      </View>
      <CounterInput
        initial={0}
        onChange={onChangeAmount}
        horizontal={true}
        increaseButtonBackgroundColor="#36A7D0"
        decreaseButtonBackgroundColor="#36A7D0"
        style={styles.counter}
      />
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
    alignItems: "center",
  },
  product: {
    width: "40%",
  },
  counter: {
    width: 150,
    height: 50,
  },
});
