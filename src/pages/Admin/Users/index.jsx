import { View, Text, StyleSheet, FlatList } from "react-native";
import { React } from "react";
import { FloatingAction } from "react-native-floating-action";
import useList from "hooks/useList";
import listToArray from "../../../services/listToArray";
import User from "./User";

export default function Users({ navigation }) {
  const users = useList("users").data;

  if (!users) return <Text>Carregando...</Text>;

  const actions = [
    {
      text: "Novo usuário",
      name: "NovoUsuario",
      position: 2,
      color: "#36A7D0",
      icon: require("images/account.png"),
    },
  ];

  const renderUser = ({ item }) => (
    <User
      name={item.name}
      email={item.email}
      department={item.department}
      onPress={() => navigation.navigate("EditarUsuario", { user: item })}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={listToArray(users)}
        renderItem={renderUser}
        keyExtractor={(item) => item.key}
      />

      <FloatingAction
        color={"#36A7D0"}
        overlayColor={"rgba(68, 68, 68, 0.4)"}
        actions={actions}
        onPressItem={(name) => {
          navigation.navigate(name);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F3F3",
  },
});
