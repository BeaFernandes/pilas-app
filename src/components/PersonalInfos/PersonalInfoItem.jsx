import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function PersonalInfoItem({ text, title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderColor: "#E5E5E5",
    borderBottomWidth: 1,
    backgroundColor: "white",
  },
  title: {
    color: "#5E5E5E",
    fontSize: 17,
    fontWeight: "bold",
  },
  text: {
    color: "#8D8D8D",
    fontSize: 17,
  },
});
