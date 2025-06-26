import { Stack } from "expo-router";
import React from 'react';
import { StatusBar } from "react-native";
import './globals.css';



export default function RootLayout() {
  return (
    <>
      <StatusBar hidden />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </>
  );
}
