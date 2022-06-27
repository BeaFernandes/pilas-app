import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import React from "react";
import Product from "./Product";
import useList from "hooks/useList";
import filterProductAvailable from "../../services/filterProductAvailable";

export default function Store() {
  const products = useList("products").data;

  if (!products) return <Text>Loading...</Text>;

  const renderProduct = ({ item }) => (
    <Product name={item.name} price={item.price} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={filterProductAvailable(products)}
        renderItem={renderProduct}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
