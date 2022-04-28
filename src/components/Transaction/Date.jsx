import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Date({ date, weekDay }) {
  return (
    <View>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.weekDay}>{weekDay}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  date: {
    fontWeight: "bold",
    color: "#5E5E5E",
  },
  weekDay: {
    color: "#8D8D8D",
    alignSelf: "flex-end",
  },
});
