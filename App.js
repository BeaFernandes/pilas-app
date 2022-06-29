import { LogBox } from "react-native";
LogBox.ignoreLogs([
  "Warning: Can't perform a React state update on an unmounted component.",
]);
LogBox.ignoreLogs(["AsyncStorage has been extracted from react-native core"]);
LogBox.ignoreLogs(["Setting a timer for a long period of time, i.e. multiple"]);

import Routes from "./src/Routes";
import { useEffect, useState } from "react";
import { AppContext } from "./src/contexts/AppContext";
import firebaseConfig from "./src/firebase/config/firebaseConfig";
import useFirebase from "./src/firebase/hooks/useFirebase";
import { Text } from "react-native";
import currentUser from "./src/services/currentUser";

export default function App() {
  const firebaseApp = useFirebase(firebaseConfig);

  const userJson = currentUser().user;

  const loggedIn = userJson != null ? true : false;

  const [isUserLoggedIn, setUserLoggedIn] = useState(false);
  const [isAdminLoggedIn, setAdminLoggedIn] = useState(false);
  const [isMayorLoggedIn, setMayorLoggedIn] = useState(false);

  useEffect(() => {
    const user = JSON.parse(userJson);

    if (user != null) {
      setAdminLoggedIn(user.isAdmin);
      setMayorLoggedIn(user.isMayor);
    }
    setUserLoggedIn(loggedIn);
  }, [userJson]);

  if (!firebaseApp) return <Text>Carregando...</Text>;

  const app = {
    setUserLoggedIn,
    isUserLoggedIn,
    setAdminLoggedIn,
    isAdminLoggedIn,
    setMayorLoggedIn,
    isMayorLoggedIn,
  };

  return (
    <AppContext.Provider value={app}>
      <Routes />
    </AppContext.Provider>
  );
}
