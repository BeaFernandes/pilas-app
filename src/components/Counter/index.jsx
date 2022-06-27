import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";

export default function Counter() {
  const [amount, onChangeAmount] = useState("0");
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
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={onDecreaseButtonPress}>
          <Text style={styles.text}>-</Text>
        </TouchableOpacity>
        <View style={styles.numberBox}>
          <TextInput
            style={styles.number}
            value={amount}
            onChangeText={onChangeAmount}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={onIncreaseButtonPress}>
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: 35,
    height: 35,
    backgroundColor: "#E5E5E5",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#8D8D8D",
    fontSize: 25,
  },
  numberBox: {
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#E5E5E5",
    borderWidth: 1,
  },
  number: {
    color: "#8D8D8D",
  },
});
