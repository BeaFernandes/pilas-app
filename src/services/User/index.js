import { View, Text } from "react-native";
import React from "react";
import remove from "./removeUser";
import create from "./createUser";
import update from "./updateUser";
import list from "./listUsers";

export default function User() {
  return { create, update, list, remove };
}
