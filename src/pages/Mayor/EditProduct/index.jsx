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

export default function EditProduct({ route, navigation }) {
  const product = route.params.product;
  const products = useList("products");

  const [name, onChangeName] = useState(product.name);
  const [amount, onChangeAmount] = useState(product.amount + "");
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
          onPress: () => navigation.navigate("Mayor"),
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

  const handleDelete = () => {
    Alert.alert("Esse usuário será excluído", "Deseja prosseguir?", [
      {
        text: "Sim",
        onPress: () => {
          navigation.navigate("Mayor");
          products.remove(product.key);
        },
      },
      {
        text: "Não",
      },
    ]);
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
        <View style={styles.buttonsRow}>
          <TouchableOpacity style={styles.button} onPress={handleUpdate}>
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.deleteButton]}
            onPress={handleDelete}
          >
            <Text style={styles.buttonText}>Deletar</Text>
          </TouchableOpacity>
        </View>
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
  row: {
    padding: 10,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    marginTop: 30,
    padding: 10,
    height: 60,
    backgroundColor: "#36A7D0",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    minWidth: "45%",
  },
  buttonText: {
    color: "white",
    fontSize: 17,
  },
  buttonsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  deleteButton: {
    backgroundColor: "#D53C4F",
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
