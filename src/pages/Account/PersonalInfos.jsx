import { View, Text, StyleSheet, Pressable } from "react-native";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import React from "react";
import PersonalInfoItem from "./PersonalInfoItem";
import useAuth from "../../firebase/hooks/useAuth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import currentUser from "../../services/currentUser";

export default function PersonalInfos({ email, department, isMayor, isAdmin }) {
  const { logout } = useAuth();
  const { removeCurrentUser } = currentUser();
  const app = useContext(AppContext);

  const handleLogout = () => {
    removeCurrentUser();
    logout();
    app.setUserLoggedIn(false);
    app.setAdminLoggedIn(false);
    app.setMayorLoggedIn(false);
  };

  const role = () => {
    if (isAdmin) {
      return "Administrador";
    } else if (isMayor) {
      return "Prefeito";
    } else {
      return "Usuário";
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dados do usuário</Text>

      <View style={styles.topBorder}>
        <PersonalInfoItem title={"E-mail"} text={email} />
        <PersonalInfoItem title={"Departamento"} text={department} />
        <PersonalInfoItem title={"Papel"} text={role()} />
        <Pressable
          onPress={handleLogout}
          style={[styles.marginTop, styles.borderTop]}
        >
          <PersonalInfoItem text={"Sair"} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  title: {
    color: "#8D8D8D",
    fontSize: 17,
    padding: 10,
  },
  text: {
    color: "#8D8D8D",
    fontSize: 17,
  },
  marginTop: {
    marginTop: 10,
  },
  borderTop: {
    borderColor: "#E5E5E5",
    borderTopWidth: 1,
  },
});
