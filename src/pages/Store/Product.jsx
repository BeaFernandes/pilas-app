import { StyleSheet, View, Text, TextInput, Alert } from "react-native";
import { TouchableOpacity } from "react-native";
import BuyButton from "./BuyButton";
import ProductInfo from "../../components/ProductInfo";
import { useEffect, useState } from "react";
import useList from "hooks/useList";
import currentUser from "../../services/currentUser";
import useReference from "../../firebase/hooks/useReference";

export default function Item({ name, price, navigation }) {
  const [amount, setAmount] = useState("0");
  const [userKey, setUserKey] = useState("");
  const [userId, setUserId] = useState("");

  currentUser()
    .getCurrentUser()
    .then((response) => {
      setUserKey(JSON.parse(response).key);
      setUserId(JSON.parse(response).userId);
    });

  const extractRecord = useList(userId + "/extract/");
  const [currentVal, setCurrentVal] = useReference(
    "users/" + userKey + "/balance"
  );

  const handleBuy = () => {
    const total = parseInt(amount) * parseInt(price);
    const newBalance = currentVal - total;
    extractRecord.create({
      product: name,
      amount: amount,
      price: price,
      total: total,
      type: "debit",
    });
    setCurrentVal(newBalance);
    setAmount("0");
    Alert.alert("Sucesso", "Produto comprado com sucesso", [
      {
        text: "Ok",
      },
    ]);
  };

  const onIncreaseButtonPress = () => {
    let newAmount = parseInt(amount) + 1;
    setAmount(newAmount + "");
  };
  const onDecreaseButtonPress = () => {
    let newAmount = amount == "0" ? 0 : parseInt(amount) - 1;
    setAmount(newAmount + "");
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
              onChangeText={setAmount}
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
