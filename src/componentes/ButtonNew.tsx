import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';

// O ': any' resolve os erros de tipagem TS7031 que aparecem no seu VS Code
export function ButtonNew({ size, focused }: any) {
  return (
    <View style={[
      styles.container, 
      { backgroundColor: focused ? '#3b82f6' : '#60a5fa' }
    ]}>
      <Entypo name="plus" size={size} color="#FFF" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20, // Faz o botão "pular" para fora da barra
    elevation: 5,     // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOpacity: 0.2,
    shadowRadius: 3,
  }
});