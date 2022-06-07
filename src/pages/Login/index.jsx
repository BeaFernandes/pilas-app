import { View, Text, Image, Button, StyleSheet, TextInput } from "react-native";
import { React, useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import useAuth from "hooks/useAuth";
import useReference from "hooks/useReference";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({ navigation }) {
  const { login } = useAuth();
  const app = useContext(AppContext);

  const [email, onChangeUser] = useState(null);
  const [pass, onChangPass] = useState(null);

  const handleLogin = () => {
    login(email, pass)
      .then((response) => {
        AsyncStorage.setItem("login", JSON.stringify(response.user.uid));
        //AsyncStorage.getItem("login").then((value) => {
        //  if (value !== null) console.log(value);
        //});
        app.setLoggedIn(true);
      })
      .catch(() => {
        console.log("Error treatment to be done");
      });
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("images/logo.png")} />
      <View style={styles.form}>
        <Text style={styles.title}>Entre com sua conta</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeUser}
          value={email}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangPass}
          value={pass}
          placeholder="Senha"
          secureTextEntry={true}
        />
        <View style={styles.loginButton}>
          <Button color="#36A7D0" title="Entrar" onPress={handleLogin} />
        </View>
        <Text style={styles.link} onPress={() => {}}>
          Esqueci minha senha
        </Text>
      </View>
      <Image style={styles.powered} source={require("images/powered.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    margin: 16,
    marginTop: 32,
  },
  logo: {
    width: 132,
    height: 80,
    resizeMode: "contain",
  },
  powered: {
    width: 132,
    height: 80,
    resizeMode: "contain",
  },
  form: {
    width: 300,
    alignItems: "stretch",
  },
  title: {
    color: "#8D8D8D",
    fontSize: 15,
  },
  link: {
    color: "#36A7D0",
    fontSize: 15,
    marginTop: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
    color: "#8D8D8D",
  },
  loginButton: {
    marginTop: 20,
  },
});
