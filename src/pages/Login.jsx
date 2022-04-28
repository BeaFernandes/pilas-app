import {
  View,
  Text,
  Image,
  Button,
  SafeAreaView,
  StyleSheet,
  TextInput,
} from "react-native";
import React from "react";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

export default function Login({ navigation }) {
  const app = useContext(AppContext);
  const handleLogin = () => {
    app.setLoggedIn(true);
  };

  const [user, onChangeUser] = React.useState(null);
  const [pass, onChangPass] = React.useState(null);

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/images/logo.png")}
      />
      <View style={styles.form}>
        <Text style={styles.title}>Entre com sua conta</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeUser}
          value={user}
          placeholder="Usuário"
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
        <Text
          style={styles.link}
          onPress={() => {
            this.toast.show("Contate o administrador", 1000);
          }}
        >
          Esqueci minha senha
        </Text>
      </View>
      <Image
        style={styles.powered}
        source={require("../../assets/images/powered.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    top: 100,
    width: 132,
    height: 80,
    resizeMode: "contain",
  },
  powered: {
    top: 400,
    width: 132,
    height: 80,
    resizeMode: "contain",
  },
  form: {
    top: 250,
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
