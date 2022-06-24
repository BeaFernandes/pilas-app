import { NavigationContainer } from "@react-navigation/native";

import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

import NavigatorLogin from "./NavigatorLogin";
import NavigatorUser from "./NavigatorUser";
import NavigatorAdmin from "./NavigatorAdmin";
import NavigatorMayor from "./NavigatorMayor";

export default function Routes() {
  const app = useContext(AppContext);

  return (
    <NavigationContainer>
      {
        !app.isUserLoggedIn ? <NavigatorLogin /> : <NavigatorUser />
        //!app.isUserLoggedIn ? <NavigatorLogin /> : <NavigatorAdmin />
      }
    </NavigationContainer>
  );
}
