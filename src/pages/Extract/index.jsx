import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Transaction from "../../components/Transaction";

export default function Extract() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Transaction
          type={"debit"}
          name={"Iogurte Nuv"}
          price={"2,00"}
          date={"20/abr"}
          weekDay={"qua"}
        />
        <Transaction
          type={"credit"}
          name={"Bônus"}
          price={"2,00"}
          date={"22/abr"}
          weekDay={"sex"}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    minWidth: "100%",
  },
});
