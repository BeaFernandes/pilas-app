import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Balance({ amount, fontColor }) {
  return (
    <View>
      <Text style={[styles.balanceLabel, { color: fontColor }]}>Saldo</Text>
      <Text style={[styles.balance, { color: fontColor }]}>Pila {amount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  balanceLabel: {
    fontSize: 17,
  },
  balance: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
