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
import createUser from "../../../services/createUser";

export default function NewUser({ navigation }) {
  const users = useList("users");
  const [name, onChangeName] = useState(null);
  const [email, onChangeEmail] = useState(null);
  const [department, onChangeDepartment] = useState(null);
  const [pass, onChangePass] = useState(null);
  const [confirmPass, onChangeConfirmPass] = useState(null);

  const handleOnRegister = () => {
    if (name && email && department && pass) {
      Keyboard.dismiss();
      createUser(email, pass)
        .then((response) => {
          users.create({
            userId: response.user.uid,
            name: name,
            email: email,
            department: department,
            isActive: true,
            isAdmin: false,
            isMayor: false,
          });
          Alert.alert("Sucesso", "Usuário cadastrado com sucesso", [
            {
              text: "Ok",
              onPress: () => navigation.navigate("Users"),
            },
          ]);
        })
        .catch(() => {
          Alert.alert("Erro", "Não foi possível cadastrar o usuário", [
            {
              text: "Ok",
            },
          ]);
        });
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
          placeholder="Email"
          value={email}
          onChangeText={onChangeEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Departamento"
          value={department}
          onChangeText={onChangeDepartment}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={pass}
          onChangeText={onChangePass}
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirmar senha"
          value={confirmPass}
          onChangeText={onChangeConfirmPass}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={handleOnRegister}>
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
});
