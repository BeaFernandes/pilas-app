import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function Transaction({
  type,
  name,
  price,
  date,
  total,
  amount,
}) {
  const transactionArrow =
    type == "debit"
      ? require("images/down-arrow.png")
      : require("images/up-arrow.png");
  return (
    <View style={styles.container}>
      <View style={styles.spaceOrganize}>
        <Image source={transactionArrow} style={styles.transactionIcon} />
        <View>
          <Text style={styles.name}>
            {amount}x {name}
          </Text>
          <Text style={styles.price}>{price} pila</Text>
        </View>
      </View>
      <View>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.total}>Total: {total} pila</Text>
      </View>
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
  name: {
    fontWeight: "bold",
    color: "#5E5E5E",
  },
  price: {
    color: "#8D8D8D",
  },
  date: {
    fontWeight: "bold",
    color: "#5E5E5E",
  },
  total: {
    color: "#8D8D8D",
    alignSelf: "flex-end",
  },
});
