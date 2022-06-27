import { StyleSheet, View, Text, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import Counter from "../../components/Counter";
import BuyButton from "./BuyButton";
import ProductInfo from "../../components/ProductInfo";
import { useState } from "react";

export default function Item({ name, price }) {
  const [amount, onChangeAmount] = useState("0");
  const handleBuy = () => {
    console.log("teste");
    console.log(amount);
  };

  const onIncreaseButtonPress = () => {
    let newAmount = parseInt(amount) + 1;
    onChangeAmount(newAmount + "");
  };
  const onDecreaseButtonPress = () => {
    let newAmount = amount == "0" ? 0 : parseInt(amount) - 1;
    onChangeAmount(newAmount + "");
  };
  return (
    <View style={styles.container}>
      <View style={styles.product}>
        <ProductInfo name={name} price={price} />
      </View>
      <View style={styles.counter}>
        <View style={styles.counterRow}>
          <TouchableOpacity
            style={styles.counterButton}
            onPress={onDecreaseButtonPress}
          >
            <Text style={styles.counterText}>-</Text>
          </TouchableOpacity>
          <View style={styles.counterNumberBox}>
            <TextInput
              style={styles.counterNumber}
              value={amount}
              onChangeText={onChangeAmount}
            />
          </View>
          <TouchableOpacity
            style={styles.counterButton}
            onPress={onIncreaseButtonPress}
          >
            <Text style={styles.counterText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <BuyButton onPress={handleBuy} />
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
  counterRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  counterButton: {
    width: 35,
    height: 35,
    backgroundColor: "#E5E5E5",
    alignItems: "center",
    justifyContent: "center",
  },
  counterText: {
    color: "#8D8D8D",
    fontSize: 25,
  },
  counterNumberBox: {
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#E5E5E5",
    borderWidth: 1,
  },
  counterNumber: {
    color: "#8D8D8D",
  },
});
