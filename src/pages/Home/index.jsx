import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import Balance from "../../components/Balance";
import Extract from "../Extract";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.balanceContainer}>
        <Balance amount={"30,00"} fontColor={"#8D8D8D"} />
        <Pressable
          style={styles.extractButton}
          onPress={() => navigation.navigate("Extrato")}
        >
          <Text style={styles.buttonFont}>Extrato</Text>
        </Pressable>
      </View>
      <Text style={styles.title}>Compras recentes</Text>
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