import { View, Text, Pressable, StyleSheet, FlatList } from "react-native";
import { React, useState, useEffect } from "react";
import { FloatingAction } from "react-native-floating-action";
import UserItem from "../../../components/UserItem";
import listUsers from "../../../services/User/listUsers";
import useList from "hooks/useList";
import listToArray from "../../../services/listToArray";
import User from "./User";

export default function Users({ navigation }) {
  const { data } = useList("users");

  if (!data) return <Text>Loading...</Text>;

  console.log(listToArray(data));

  const actions = [
    {
      text: "Novo usuário",
      name: "NovoUsuario",
      position: 2,
      color: "#36A7D0",
      icon: require("images/account.png"),
    },
    {
      text: "Alterar prefeito",
      name: "bt_alter_mayor",
      position: 1,
      color: "#36A7D0",
      icon: require("images/account-star.png"),
    },
  ];

  const handlePressItem = (name) => {
    navigation.navigate(name);
  };

  const renderUser = ({ item }) => (
    <User
      name={item.name}
      email={item.email}
      department={item.department}
      onPress={() => navigation.navigate("NovoUsuario")}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={listToArray(data)}
        renderItem={renderUser}
        keyExtractor={(item) => item.key}
      />

      <FloatingAction
        color={"#36A7D0"}
        overlayColor={"rgba(68, 68, 68, 0.4)"}
        actions={actions}
        onPressItem={(name) => {
          handlePressItem(name);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
