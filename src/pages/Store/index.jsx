import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import React from "react";
import Product from "./Product";

export default function Store() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Product name={"Iogurte Nuv"} price={"2,00"} />
        <Product name={"Bolinho"} price={"1,00"} />
        <Product name={"Chocomilk"} price={"2,00"} />
        <Product name={"Barrinha de cereal"} price={"2,00"} />
        <Product name={"Barra de chocolate"} price={"4,00"} />
        <Product name={"Iogurte Nuv"} price={"2,00"} />
        <Product name={"Bolinho"} price={"1,00"} />
        <Product name={"Chocomilk"} price={"2,00"} />
        <Product name={"Barrinha de cereal"} price={"2,00"} />
        <Product name={"Barra de chocolate"} price={"4,00"} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
