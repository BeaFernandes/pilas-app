import Stack from "./Stack";

import Login from "../pages/Login";

const NavigatorLogin = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Login"
      component={Login}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default NavigatorLogin;
