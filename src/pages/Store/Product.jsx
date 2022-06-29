import { StyleSheet, View, Text, Alert } from "react-native";
import { TouchableOpacity } from "react-native";
import BuyButton from "./BuyButton";
import ProductInfo from "../../components/ProductInfo";
import { useEffect, useState } from "react";
import useList from "hooks/useList";
import currentUser from "../../services/currentUser";
import useReference from "../../firebase/hooks/useReference";
import { getAuth } from "firebase/auth";
import CounterQtd from "../../components/CounterQtd";

export default function Item({ name, price, onBuy }) {
  const [amount, setAmount] = useState(0);

  const handleBuyLocal = () => {
    const total = parseInt(amount) * parseInt(price);
    onBuy?.(total, name, price, amount);
  };

  return (
    <View style={styles.container}>
      <View style={styles.product}>
        <ProductInfo name={name} price={price} />
      </View>
      <CounterQtd value={amount} onChange={setAmount} />

      <BuyButton onPress={handleBuyLocal} />
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
});
