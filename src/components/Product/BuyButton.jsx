import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import React from "react";

export default function BuyButton() {
  return (
    <View style={styles.container}>
      <Pressable>
        <Image
          style={styles.bt}
          source={require("../../../assets/images/buy-bt.png")}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  bt: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
});
