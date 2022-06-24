import Stack from "./Stack";
import Tab from "./Tab";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";

import Conta from "../pages/Account";
import Produtos from "../pages/Mayor/Products";
import NovoProduto from "../pages/Mayor/NewProduct";
import EditarProduto from "../pages/Mayor/EditProduct";

const NavigatorMayor = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === "Produtos") {
          iconName = focused ? "home" : "home-outline";
        } else if (route.name === "Conta") {
          iconName = focused ? "account" : "account-outline";
        }

        return (
          <View>
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          </View>
        );
      },
      tabBarActiveTintColor: "#36A7D0",
      tabBarInactiveTintColor: "gray",
    })}
  >
    <Tab.Screen
      name="Produtos"
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

const NavigatorNestedMayor = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Products"
      component={Produtos}
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

export default NavigatorMayor;
