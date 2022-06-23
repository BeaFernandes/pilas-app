import Stack from "./Stack";
import Tab from "./Tab";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";

import Conta from "../pages/Account";
import Usuarios from "../pages/Admin/Users";
import NovoUsuario from "../pages/Admin/NewUser";
import EditarUsuario from "../pages/Admin/EditUser";

const NavigatorAdmin = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === "Usuarios") {
          iconName = focused ? "account-cog" : "account-cog-outline";
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
      name="Usuarios"
      component={NavigatorNestedAdmin}
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

const NavigatorNestedAdmin = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Users"
      component={Usuarios}
      options={{
        title: "Usuários",
        headerStyle: { backgroundColor: "#36A7D0" },
        headerTintColor: "#fff",
      }}
    />
    <Stack.Screen
      name="NovoUsuario"
      component={NovoUsuario}
      options={{
        title: "Novo usuário",
        headerStyle: { backgroundColor: "#36A7D0" },
        headerTintColor: "#fff",
      }}
    />
    <Stack.Screen
      name="EditarUsuario"
      component={EditarUsuario}
      options={{
        title: "Informações de usuário",
        headerStyle: { backgroundColor: "#36A7D0" },
        headerTintColor: "#fff",
      }}
    />
  </Stack.Navigator>
);

export default NavigatorAdmin;
