import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export default function currentUserAuth() {
  const [userAuth, setUserAuth] = useState(null);

  const setCurrentUserAuth = (userAuth) => {
    AsyncStorage.setItem(
      "current_user_auth",
      JSON.stringify([userAuth, userAuth])
    );
    //AsyncStorage.setItem("current_user_auth", JSON.stringify(userAuth));
  };

  const removeCurrentUserAuth = () => {
    AsyncStorage.removeItem("current_user_auth");
  };

  useEffect(() => {
    AsyncStorage.getItem("current_user_auth").then((value) => {
      setUserAuth(value);
    });
  }, []);

  return { userAuth, setCurrentUserAuth, removeCurrentUserAuth };
}
