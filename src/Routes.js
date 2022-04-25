import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Home from "./pages/Home";
import Produtos from "./pages/Products";
import Conta from "./pages/Account";
import Extrato from "./pages/Extract";
import { View } from "react-native";

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Extrato" component={Extrato} />
    </HomeStack.Navigator>
  );
}

const ProductStack = createNativeStackNavigator();

function ProductStackScreen() {
  return (
    <ProductStack.Navigator>
      <ProductStack.Screen name="Produtos" component={Produtos} />
      <ProductStack.Screen name="Extrato" component={Extrato} />
    </ProductStack.Navigator>
  );
}

const AccountStack = createNativeStackNavigator();

function AccountStackScreen() {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen name="Conta" component={Conta} />
      <AccountStack.Screen name="Extrato" component={Extrato} />
    </AccountStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
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
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Produtos" component={ProductStackScreen} />
        <Tab.Screen name="Conta" component={AccountStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
