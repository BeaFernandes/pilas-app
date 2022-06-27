import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";

export default function CounterQtd({ value, onChange }) {
  const [amount, setAmount] = useState(value);

  const onChangeLocal = (newAmount) => {
    // update local reference
    setAmount(newAmount);

    //notify parent event
    onChange?.(newAmount);
  };

  const onIncreaseButtonPress = () => {
    onChangeLocal(amount + 1);
  };

  const onDecreaseButtonPress = () => {
    // max between zero and negative is always zero
    onChangeLocal(Math.max(0, amount - 1));
  };

  return (
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
            value={amount.toString()}
            keyboardType="numeric"
            onChangeText={(text) => onChangeLocal(parseInt(text))} // this is the only "string" event, so parse it...
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
  );
}

const styles = StyleSheet.create({
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
