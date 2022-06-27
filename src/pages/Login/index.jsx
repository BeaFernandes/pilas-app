import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TextInput,
  Alert,
  Keyboard,
} from "react-native";
import { React, useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import useAuth from "hooks/useAuth";
import useList from "hooks/useList";
import listToArray from "../../services/listToArray";
import currentUser from "../../services/currentUser";
import currentUserAuth from "../../services/currentUserAuth";

export default function Login({ navigation }) {
  const { login } = useAuth();
  const users = useList("users");

  const app = useContext(AppContext);
  const { user, setCurrentUser } = currentUser();
  const { userAuth, setCurrentUserAuth } = currentUserAuth();

  const [email, onChangeUser] = useState(null);
  const [pass, onChangPass] = useState(null);

  const handleLogin = () => {
    if (email && pass) {
      login(email, pass)
        .then((response) => {
          const usersArray = listToArray(users.data);

          usersArray.forEach((user) => {
            if (user.userId == response.user.uid) {
              if (user.isActive) {
                setCurrentUser(user);
                app.setAdminLoggedIn(user.isAdmin);
                app.setMayorLoggedIn(user.isMayor);
                app.setUserLoggedIn(true);
              } else {
                throw new Error();
              }
            }
          });
        })
        .catch(() => {
          Keyboard.dismiss();
          Alert.alert("Erro", "Usuário ou senha incorretos", [
            {
              text: "Ok",
            },
          ]);
        });
    } else {
      Keyboard.dismiss();
      Alert.alert("Erro", "Existem campos em branco", [
        {
          text: "Ok",
        },
      ]);
    }
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
