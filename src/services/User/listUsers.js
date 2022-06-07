import { View, Text } from "react-native";
import { React, useState, useEffect } from "react";
import useList from "hooks/useList";

export default function listUsers() {
  const { data } = useList("users");
  const [test, setTest] = useState([]);

  const users = () => {
    const keys = Object.keys(data);
    const usersList = [];
    keys.forEach((key) => {
      usersList.push(data[key]);
    });
    return "data";
  };

  useEffect(() => {
    const keys = Object.keys(data);
    const usersList = [];
    keys.forEach((key) => {
      usersList.push(data[key]);
    });
    setTest("test");
  }, []);

  return { test };
}
