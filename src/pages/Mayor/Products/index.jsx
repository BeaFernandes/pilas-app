import { View, Text, Pressable, StyleSheet, FlatList } from "react-native";
import { React, useState, useEffect } from "react";
import { FloatingAction } from "react-native-floating-action";
import useList from "hooks/useList";
import UserItem from "../../../components/UserItem";

export default function Products({ navigation }) {
  const { data } = useList("products");
  const actions = [
    {
      text: "Novo produto",
      name: "NovoProduto",
      position: 2,
      color: "#36A7D0",
      icon: require("images/plus.png"),
    },
  ];

  const handlePressItem = (name) => {
    navigation.navigate(name);
  };

  return (
    <View style={styles.container}>
      <FlatList data={data} keyExtractor={(product) => product.productId} />

      <View style={styles.balanceContainer}></View>
      <FloatingAction
        color={"#36A7D0"}
        overlayColor={"rgba(68, 68, 68, 0.4)"}
        actions={actions}
        onPressItem={(name) => {
          handlePressItem(name);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  balanceContainer: {
    width: 300,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  extractButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 90,
    backgroundColor: "#36A7D0",
    padding: 8,
    borderRadius: 5,
  },
  buttonFont: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
});
