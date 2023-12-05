import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from '@rneui/themed';
import HomeScreen from './src/screen/HomeScreen';


export default function App() {
  
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <HomeScreen />
        <StatusBar />
      </ThemeProvider>
    </SafeAreaProvider>
  );

}

