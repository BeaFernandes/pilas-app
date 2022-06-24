import { View, Text, StyleSheet, FlatList } from "react-native";
import { React } from "react";
import { FloatingAction } from "react-native-floating-action";
import useList from "hooks/useList";
import listToArray from "../../../services/listToArray";
import Product from "./Product";

export default function Products({ navigation }) {
  const products = useList("products").data;

  if (!products) return <Text>Loading...</Text>;

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

  const renderProduct = ({ item }) => (
    <Product
      name={item.name}
      amount={item.amount}
      price={item.price}
      onPress={() => navigation.navigate("EditarProduto", { product: item })}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={listToArray(products)}
        renderItem={renderProduct}
        keyExtractor={(item) => item.key}
      />

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
    backgroundColor: "#F3F3F3",
  },
});
