import Stack from "./Stack";
import Tab from "./Tab";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Text } from "react-native";
import useReference from "hooks/useReference";
import { useState } from "react";
import currentUser from "../services/currentUser";

import Home from "../pages/Home";
import Loja from "../pages/Store";
import Conta from "../pages/Account";
import Extrato from "../pages/Extract";
import PersonalizedHeader from "../components/PersonalizedHeader";
import Balance from "../components/Balance";
import Prefeito from "../pages/Mayor/Products";
import NovoProduto from "../pages/Mayor/NewProduct";
import EditarProduto from "../pages/Mayor/EditProduct";

const NavigatorUser = () => {
  const [userKey, setUserKey] = useState("");

  currentUser()
    .getCurrentUser()
    .then((response) => {
      setUserKey(JSON.parse(response).key);
    });

  const [balance, setBalance] = useReference("users/" + userKey + "/balance");

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
          } else if (route.name === "Prefeito") {
            iconName = focused ? "cog" : "cog-outline";
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
              titleComponent={<Balance amount={balance} fontColor={"#fff"} />}
            />
          ),
          headerStyle: { backgroundColor: "#36A7D0" },
          headerTintColor: "#fff",
        }}
      />
      <Tab.Screen
        name="Prefeito"
        component={NavigatorNestedMayor}
        options={{ headerShown: false }}
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

const NavigatorNestedMayor = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Mayor"
      component={Prefeito}
      options={{
        title: "Produtos",
        headerStyle: { backgroundColor: "#36A7D0" },
        headerTintColor: "#fff",
      }}
    />
    <Stack.Screen
      name="NovoProduto"
      component={NovoProduto}
      options={{
        title: "Novo produto",
        headerStyle: { backgroundColor: "#36A7D0" },
        headerTintColor: "#fff",
      }}
    />
    <Stack.Screen
      name="EditarProduto"
      component={EditarProduto}
      options={{
        title: "Informações do produto",
        headerStyle: { backgroundColor: "#36A7D0" },
        headerTintColor: "#fff",
      }}
    />
  </Stack.Navigator>
);

export default NavigatorUser;
