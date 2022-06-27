import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import Balance from "../../components/Balance";
import Extract from "../Extract";
import currentUser from "../../services/currentUser";
import useReference from "../../firebase/hooks/useReference";

export default function Home({ navigation }) {
  const [userKey, setUserKey] = useState("");

  currentUser()
    .getCurrentUser()
    .then((response) => {
      setUserKey(JSON.parse(response).key);
    });

  const [balace, setBalance] = useReference("users/" + userKey + "/balance");

  if (!balace) return <Text>Loading...</Text>;

  return (
    <View style={styles.container}>
      <View style={styles.balanceContainer}>
        <Balance amount={balace} fontColor={"#8D8D8D"} />
      </View>
      <Text style={styles.title}>Últimas compras</Text>
      <Extract />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  title: {
    color: "#8D8D8D",
    fontSize: 17,
    paddingTop: 50,
    paddingLeft: 10,
    alignSelf: "flex-start",
  },
});
