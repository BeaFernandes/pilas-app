import { NavigationContainer } from "@react-navigation/native";

import { useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts/AppContext";

import NavigatorLogin from "./NavigatorLogin";
import NavigatorUser from "./NavigatorUser";
import NavigatorAdmin from "./NavigatorAdmin";
import NavigatorMayor from "./NavigatorMayor";

export default function Routes() {
  const app = useContext(AppContext);
  const [navigator, setNavigator] = useState(null);

  useEffect(() => {
    if (app.isAdminLoggedIn) {
      setNavigator(<NavigatorAdmin />);
    } else if (app.isMayorLoggedIn) {
      setNavigator(<NavigatorMayor />);
    } else {
      setNavigator(<NavigatorUser />);
    }
  }, [app]);

  return (
    <NavigationContainer>
      {!app.isUserLoggedIn ? <NavigatorLogin /> : navigator}
    </NavigationContainer>
  );
}
