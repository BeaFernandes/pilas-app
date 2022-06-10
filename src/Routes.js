import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";

import { useContext } from "react";
import { AppContext } from "./contexts/AppContext";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Loja from "./pages/Store";
import Conta from "./pages/Account";
import Extrato from "./pages/Extract";
import PersonalizedHeader from "./components/PersonalizedHeader";
import Balance from "./components/Balance";
import Usuarios from "./pages/Admin/Users";
import NovoUsuario from "./pages/Admin/NewUser";
import EditarUsuario from "./pages/Admin/EditUser";
import Produtos from "./pages/Mayor/Products";
import NovoProduto from "./pages/Mayor/NewProduct";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const StackNested = createNativeStackNavigator();

export default function Routes() {
  const app = useContext(AppContext);

  const NavigatorLogin = () => (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );

  const NavigatorNestedAdmin = () => (
    <StackNested.Navigator>
      <StackNested.Screen
        name="Users"
        component={Usuarios}
        options={{
          title: "Usuários",
          headerStyle: { backgroundColor: "#36A7D0" },
          headerTintColor: "#fff",
        }}
      />
      <StackNested.Screen
        name="NovoUsuario"
        component={NovoUsuario}
        options={{
          title: "Novo usuário",
          headerStyle: { backgroundColor: "#36A7D0" },
          headerTintColor: "#fff",
        }}
      />
      <StackNested.Screen
        name="EditarUsuario"
        component={EditarUsuario}
        options={{
          title: "Informações de usuário",
          headerStyle: { backgroundColor: "#36A7D0" },
          headerTintColor: "#fff",
        }}
      />
    </StackNested.Navigator>
  );

  const NavigatorFlutterActionMayor = () => (
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
    </Stack.Navigator>
  );

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
        name="Produtos"
        component={NavigatorFlutterActionMayor}
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

  const NavigatorNested = () => (
    <StackNested.Navigator>
      <StackNested.Screen
        name="HomeScreen"
        component={Home}
        options={{
          title: "Pilas",
          headerStyle: { backgroundColor: "#36A7D0" },
          headerTintColor: "#fff",
        }}
      />
      <StackNested.Screen
        name="Extrato"
        component={Extrato}
        options={{
          headerStyle: { backgroundColor: "#36A7D0" },
          headerTintColor: "#fff",
        }}
      />
    </StackNested.Navigator>
  );

  const NavigatorTabs = () => (
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
            iconName = focused ? "account-star" : "account-star-outline";
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
        component={NavigatorNested}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Loja"
        component={Loja}
        options={{
          headerTitle: () => (
            <PersonalizedHeader
              titleComponent={<Balance amount={"30,00"} fontColor={"#fff"} />}
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
      <Tab.Screen
        name="Prefeito"
        component={Conta}
        options={{
          headerTitle: "Minha conta",
          headerStyle: { backgroundColor: "#36A7D0" },
          headerTintColor: "#fff",
        }}
      />
    </Tab.Navigator>
  );

  return (
    <NavigationContainer>
      {
        //!app.isLoggedIn ? <NavigatorLogin /> : <NavigatorTabs />
        !app.isLoggedIn ? <NavigatorLogin /> : <NavigatorAdmin />
      }
    </NavigationContainer>
  );
}
