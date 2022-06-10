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

export default function EditUser({ route, navigation }) {
  const user = route.params.user;
  const users = useList("users");

  const [name, onChangeName] = useState(user.name);
  const [email, onChangeEmail] = useState(user.email);
  const [department, onChangeDepartment] = useState(user.department);

  const handleOnSend = () => {};

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
          placeholder="Email"
          value={email}
          onChangeText={onChangeEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          editable={false}
        />
        <TextInput
          style={styles.input}
          placeholder="Departamento"
          value={department}
          onChangeText={onChangeDepartment}
        />
        <View style={styles.buttonsRow}>
          <TouchableOpacity style={styles.button} onPress={handleOnSend}>
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.deleteButton]}
            onPress={handleOnSend}
          >
            <Text style={styles.buttonText}>Excluir</Text>
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
  },
  deleteButton: {
    backgroundColor: "#D53C4F",
  },
});
