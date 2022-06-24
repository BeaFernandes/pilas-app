import { StyleSheet, View, Text, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export default function Product({ name, amount, price, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.product}>
        <View style={styles.information}>
          <Text style={styles.title}>
            {name} | {price} pila
          </Text>
          <Text style={styles.text}>Quantidade em estoque: {amount} </Text>
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
  product: {
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
  text: {
    color: "#8D8D8D",
    fontSize: 15,
  },
});
