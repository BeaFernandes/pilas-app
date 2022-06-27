import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export default function currentUser() {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);
  const [userKey, setUserKey] = useState(null);

  const setCurrentUser = (user) => {
    AsyncStorage.setItem("current_user", JSON.stringify(user));
  };

  const removeCurrentUser = () => {
    AsyncStorage.removeItem("current_user");
  };

  const getCurrentUser = () => {
    return AsyncStorage.getItem("current_user");
  };

  useEffect(() => {
    AsyncStorage.getItem("current_user").then((value) => {
      if (value != null) {
        setUser(value);
        setUserId(JSON.parse(value).userId);
        setUserKey(JSON.parse(value).key);
      }
    });
  }, []);

  return {
    user,
    userId,
    userKey,
    setCurrentUser,
    getCurrentUser,
    removeCurrentUser,
  };
}
