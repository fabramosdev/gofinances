import React from 'react';
import { ThemeProvider } from 'styled-components';

import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";

import * as SplashScreen from 'expo-splash-screen';

import theme from "./src/global/styles/theme";

import { Dashboard } from "./src/screens/Dashboard";

export default function App() {

  SplashScreen.preventAutoHideAsync()

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  })

  if(!fontsLoaded) {
    return 
  }

  SplashScreen.hideAsync()

  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
}