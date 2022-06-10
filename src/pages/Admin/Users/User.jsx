import { StyleSheet, View, Text, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export default function User({ name, email, department, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.user}>
        <View style={styles.information}>
          <Text style={styles.title}>
            {name} | {department}
          </Text>
          <Text style={styles.email}>{email}</Text>
        </View>
        <MaterialCommunityIcons
          style={styles.chevron}
          name="chevron-right"
          size={24}
          color="black"
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  user: {
    padding: 25,
    borderColor: "#E5E5E5",
    borderBottomWidth: 1,
    minWidth: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
  },
  title: {
    color: "#5E5E5E",
    fontSize: 15,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  email: {
    color: "#8D8D8D",
    fontSize: 15,
  },
  information: {},
  chevron: {},
});
