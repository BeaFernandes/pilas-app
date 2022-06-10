import { View, StyleSheet, Image, Text } from "react-native";
import PersonalInfos from "./PersonalInfos";
export default function Account() {
  return (
    <View style={styles.container}>
      <Image source={require("images/avatar.png")} style={styles.avatar} />
      <Text style={styles.name}>Fulano de Tal</Text>
      <PersonalInfos></PersonalInfos>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    color: "#5E5E5E",
    marginBottom: 20,
  },
});
