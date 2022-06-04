import { View, Text, Pressable, StyleSheet, FlatList } from "react-native";
import { React, useState, useEffect } from "react";
import { FloatingAction } from "react-native-floating-action";
import useList from "hooks/useList";
import UserItem from "../../../components/UserItem";

export default function Users({ navigation }) {
  const { data } = useList("users");
  //const [users, setUsers] = useState([]);
  const [keys, setKeys] = useState([]);

  useEffect(() => {
    //setUsers(data);
    //setKeys(Object.keys(data));
    console.log(data);
  }, []);

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

  const User = ({ user }) => {
    return (
      <View>
        <Text>{user.name}alo</Text>
      </View>
    );
  };

  //const usersList = [];
  //const test = () => {
  // if (users.data) {
  //    Object.keys(users.data).forEach((key) => {
  //      usersList.push(users.data[key]);
  //    });
  //  }
  //  console.log(usersList[0]);
  //};

  const handleTest = () => {
    console.log(Object.keys(data));
  };
  return (
    <View style={styles.container}>
      <Pressable style={styles.extractButton} onPress={handleTest}>
        <Text style={styles.buttonFont}>Extrato</Text>
      </Pressable>

      <FlatList
        data={data}
        renderItem={User}
        keyExtractor={(user) => user.userId}
      />

      <View style={styles.balanceContainer}></View>
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
    padding: 10,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  balanceContainer: {
    width: 300,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  extractButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 90,
    backgroundColor: "#36A7D0",
    padding: 8,
    borderRadius: 5,
  },
  buttonFont: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
});
