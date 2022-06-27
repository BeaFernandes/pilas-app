import Stack from "./Stack";
import Tab from "./Tab";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Text } from "react-native";

import Home from "../pages/Home";
import Loja from "../pages/Store";
import Conta from "../pages/Account";
import Extrato from "../pages/Extract";
import PersonalizedHeader from "../components/PersonalizedHeader";
import Balance from "../components/Balance";
import currentUser from "../services/currentUser";

const NavigatorUser = () => {
  const userJson = currentUser().user;

  if (!userJson) return <Text>Loading...</Text>;

  const user = JSON.parse(userJson);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Loja") {
            iconName = focused ? "store" : "store-outline";
          } else if (route.name === "Conta") {
            iconName = focused ? "account" : "account-outline";
          }

          return (
            <View>
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            </View>
          );
        },
        tabBarActiveTintColor: "#36A7D0",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Home"
        component={NavigatorNestedUser}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Loja"
        component={Loja}
        options={{
          headerTitle: () => (
            <PersonalizedHeader
              titleComponent={
                <Balance amount={user.balance} fontColor={"#fff"} />
              }
            />
          ),
          headerStyle: { backgroundColor: "#36A7D0" },
          headerTintColor: "#fff",
        }}
      />
      <Tab.Screen
        name="Conta"
        component={Conta}
        options={{
          headerTitle: "Minha conta",
          headerStyle: { backgroundColor: "#36A7D0" },
          headerTintColor: "#fff",
        }}
      />
    </Tab.Navigator>
  );
};

const NavigatorNestedUser = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="HomeScreen"
      component={Home}
      options={{
        title: "Pilas",
        headerStyle: { backgroundColor: "#36A7D0" },
        headerTintColor: "#fff",
      }}
    />
    <Stack.Screen
      name="Extrato"
      component={Extrato}
      options={{
        headerStyle: { backgroundColor: "#36A7D0" },
        headerTintColor: "#fff",
      }}
    />
  </Stack.Navigator>
);

export default NavigatorUser;
