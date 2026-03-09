import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/Routes'; // Verifique se o nome do arquivo dentro de src é Routes.js

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}