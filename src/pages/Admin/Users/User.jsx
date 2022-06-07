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
    padding: 15,
    borderColor: "#E5E5E5",
    borderBottomWidth: 1,
    minWidth: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "#5E5E5E",
    fontSize: 17,
    fontWeight: "bold",
  },
  email: {
    color: "#8D8D8D",
    fontSize: 17,
  },
  information: {},
  chevron: {},
});
