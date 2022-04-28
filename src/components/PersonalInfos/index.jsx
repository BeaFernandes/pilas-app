import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import React from "react";
import PersonalInfoItem from "./PersonalInfoItem";

export default function PersonalInfos() {
  const app = useContext(AppContext);

  const handleLogout = () => {
    app.setLoggedIn(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dados do usuário</Text>

      <View style={styles.topBorder}>
        <PersonalInfoItem
          title={"E-mail"}
          text={"fulanodetal@acttecnologia.com.br"}
        />
        <PersonalInfoItem title={"Departamento"} text={"Nível 2"} />
        <PersonalInfoItem title={"Papel"} text={"Usuário"} />
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
