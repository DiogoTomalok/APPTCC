import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    // "View" com V maiúsculo
    <View style={styles.container}> 
      <Text>MSG ALEATORIA2</Text>
    </View>
  );
}

// "StyleSheet.create" com ponto e nome da constante ajustado para "styles"
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});