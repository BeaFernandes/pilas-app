import Routes from "./src/Routes";
import { useState } from "react";
import { AppContext } from "./src/contexts/AppContext";
import Toast, { DURATION } from "react-native-easy-toast";

export default function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const app = {
    setLoggedIn,
    isLoggedIn,
  };

  return (
    <AppContext.Provider value={app}>
      <Routes />
      <Toast ref={(toast) => (this.toast = toast)} />
    </AppContext.Provider>
  );
}
