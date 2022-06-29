import { View, Text, StyleSheet, FlatList, Alert } from "react-native";
import React, { useState } from "react";
import Product from "./Product";
import useList from "hooks/useList";
import filterProductAvailable from "../../services/filterProductAvailable";
import useReference from "../../firebase/hooks/useReference";
import currentUser from "../../services/currentUser";

export default function Store({ navigation }) {
  const [userKey, setUserKey] = useState("");
  const [userId, setUserId] = useState("");
  const products = useList("products").data;

  currentUser()
    .getCurrentUser()
    .then((response) => {
      setUserKey(JSON.parse(response).key);
      setUserId(JSON.parse(response).userId);
    });

  const [balance, setBalance] = useReference(
    "users/" + userKey + "/balance",
    "..."
  );

  const extractRecord = useList(userId + "/extract/");

  if (!products) return <Text>Carregando...</Text>;
  if (!extractRecord) return <Text>Carregando...</Text>;

  const handleBuy = (total, name, price, amount) => {
    if (balance >= total) {
      const newBalance = balance - total;
      extractRecord.create({
        product: name,
        amount: amount,
        price: price,
        total: total,
        type: "debit",
      });
      setBalance(newBalance);
      Alert.alert("Sucesso", "Produto comprado com sucesso", [
        {
          text: "Ok",
        },
      ]);
    } else {
      Alert.alert("Erro", "Saldo insuficiente", [
        {
          text: "Ok",
        },
      ]);
    }
  };

  const renderProduct = ({ item }) => (
    <Product name={item.name} price={item.price} onBuy={handleBuy} />
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
