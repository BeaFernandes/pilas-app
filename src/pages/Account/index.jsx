import { useEffect, useState } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import currentUser from "../../services/currentUser";
import PersonalInfos from "./PersonalInfos";
export default function Account() {
  const userJson = currentUser().user;
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(JSON.parse(userJson));
  }, [userJson]);

  if (!user) return <Text>Loading...</Text>;

  return (
    <View style={styles.container}>
      <Image source={require("images/avatar.png")} style={styles.avatar} />
      <Text style={styles.name}>{user.name}</Text>
      <PersonalInfos
        email={user.email}
        department={user.department}
        isMayor={user.isMayor}
        isAdmin={user.isAdmin}
      />
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
