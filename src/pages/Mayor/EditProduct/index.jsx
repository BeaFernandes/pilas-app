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
import CounterInput from "react-native-counter-input";

export default function EditProduct({ route, navigation }) {
  const product = route.params.product;
  const products = useList("products");

  const [name, onChangeName] = useState(product.name);
  const [amount, onChangeAmount] = useState(product.amount);
  const [price, onChangePrice] = useState(product.price);

  if (!products) return <Text>Loading...</Text>;

  const handleUpdate = () => {
    if (name && amount && price) {
      Keyboard.dismiss();
      products.update(product.key, {
        name: name,
        amount: amount,
        price: price,
      });
      Alert.alert("Sucesso", "Produto atualizado com sucesso", [
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
          <Text style={styles.priceInput}>Quantidade</Text>
          <CounterInput
            initial={amount}
            onChange={onChangeAmount}
            horizontal={true}
            increaseButtonBackgroundColor="#36A7D0"
            decreaseButtonBackgroundColor="#36A7D0"
            style={styles.counter}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleUpdate}>
          <Text style={styles.buttonText}>Salvar</Text>
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
  priceInput: {
    padding: 10,
    marginTop: 30,
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
  counter: {
    marginTop: 20,
    width: 150,
    height: 55,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
