import { View, Text, Button } from "react-native";
import React from "react";

export default function Home({ navigation }) {
  const handleExtract = () => {
    navigation.navigate("Extrato");
  };

  return (
    <View>
      <Text>Home</Text>
      <Button title="Extrato" onPress={handleExtract} />
    </View>
  );
}
