import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";

import { useContext } from "react";
import { AppContext } from "./contexts/AppContext";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Produtos from "./pages/Products";
import Conta from "./pages/Account";
import Extrato from "./pages/Extract";
import PersonalizedHeader from "./components/PersonalizedHeader";
import Balance from "./components/Balance";

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
          } else if (route.name === "Produtos") {
            iconName = focused ? "store" : "store-outline";
          } else if (route.name === "Conta") {
            iconName = focused ? "account-circle" : "account-circle-outline";
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
        name="Produtos"
        component={Produtos}
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
    </Tab.Navigator>
  );

  return (
    <NavigationContainer>
      {!app.isLoggedIn ? <NavigatorLogin /> : <NavigatorTabs />}
    </NavigationContainer>
  );
}
