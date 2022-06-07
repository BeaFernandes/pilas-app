import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import ProductInfo from "../ProductInfo";
import Date from "./Date";

export default function index({ type, name, price, date, weekDay }) {
  const transactionArrow =
    type == "debit"
      ? require("images/down-arrow.png")
      : require("images/up-arrow.png");
  return (
    <View style={styles.container}>
      <View style={styles.spaceOrganize}>
        <Image source={transactionArrow} style={styles.transactionIcon} />
        <ProductInfo name={name} price={price} />
      </View>
      <Date date={date} weekDay={weekDay} />
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
  transactionIcon: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    marginRight: 15,
  },
  spaceOrganize: {
    flexDirection: "row",
  },
});
