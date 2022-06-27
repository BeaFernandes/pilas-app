import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export default function currentUser() {
  const [user, setUser] = useState(null);

  const setCurrentUser = (user) => {
    AsyncStorage.setItem("current_user", JSON.stringify(user));
  };

  const removeCurrentUser = () => {
    AsyncStorage.removeItem("current_user");
  };

  useEffect(() => {
    AsyncStorage.getItem("current_user").then((value) => {
      setUser(value);
    });
  }, []);

  return { user, setCurrentUser, removeCurrentUser };
}
