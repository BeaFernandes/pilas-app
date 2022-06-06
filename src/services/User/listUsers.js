import { View, Text } from "react-native";
import { React, useState } from "react";
import useList from "hooks/useList";

export default function listUsers() {
  const { data } = useList("users");

  const users = () => {
    const keys = Object.keys(data);
    const usersList = [];
    keys.forEach((key) => {
      usersList.push(data[key]);
    });
    console.log("alo");
    return data;
  };
  return { users };
}
