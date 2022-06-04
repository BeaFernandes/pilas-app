import Routes from "./src/Routes";
import { useState } from "react";
import { AppContext } from "./src/contexts/AppContext";
import firebaseConfig from "./src/firebase/config/firebaseConfig";
import useFirebase from "./src/firebase/hooks/useFirebase";
import { Text } from "react-native";

export default function App() {
  const firebaseApp = useFirebase(firebaseConfig);
  const [isLoggedIn, setLoggedIn] = useState(false);

  if (!firebaseApp) return <Text>Loading...</Text>;

  const app = {
    setLoggedIn,
    isLoggedIn,
  };

  return (
    <AppContext.Provider value={app}>
      <Routes />
    </AppContext.Provider>
  );
}
