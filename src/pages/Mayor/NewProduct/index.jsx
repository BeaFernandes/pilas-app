import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Alert,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { React, useState } from "react";
import useList from "hooks/useList";

export default function NewProduct({ navigation }) {
  const products = useList("products");
  const [name, onChangeName] = useState(null);
  const [amount, onChangeAmount] = useState("0");
  const [price, onChangePrice] = useState(0.0);

  const handleRegister = () => {
    if (name && amount && price) {
      Keyboard.dismiss();
      products.create({
        name: name,
        amount: amount,
        price: price,
      });
      Alert.alert("Sucesso", "Produto cadastrado com sucesso", [
        {
          text: "Ok",
          onPress: () => navigation.navigate("Products"),
        },
      ]);
    } else {
      Alert.alert("Erro", "Existem campos vazios", [
        {
          text: "Ok",
        },
      ]);
    }
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
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={name}
          onChangeText={onChangeName}
        />
        <TextInput
          style={styles.input}
          placeholder="Preço"
          value={price}
          onChangeText={onChangePrice}
        />
        <View style={styles.row}>
          <Text style={styles.amountLabel}>Quantidade</Text>
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
        </View>
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  form: {
    width: "90%",
    alignItems: "stretch",
  },
  title: {
    color: "#8D8D8D",
    fontSize: 18,
    alignSelf: "center",
    fontWeight: "bold",
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
    color: "#8D8D8D",
  },
  amountLabel: {
    color: "#8D8D8D",
    width: "50%",
  },
  button: {
    marginTop: 30,
    padding: 10,
    height: 60,
    backgroundColor: "#36A7D0",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 17,
  },
  row: {
    padding: 10,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
