import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, SafeAreaView } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { styles } from '../Styles/Home_styles';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [societies, setSocieties] = useState([]);

  useEffect(() => {
    // 1. Criamos a conexão com a coleção "Soceities" (conforme seu print)
    const subscriber = firestore()
      .collection('Soceities')
      .onSnapshot(querySnapshot => {
        const list = [];

        querySnapshot.forEach(documentSnapshot => {
          // 2. Pegamos os dados e o ID de cada documento
          list.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setSocieties(list);
        setLoading(false);
      }, error => {
        console.error("Erro ao buscar dados: ", error);
        setLoading(false);
      });

    // Stop listening for updates when no longer required
    return () => subscriber();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#2e7d32" />
        <Text>Carregando quadras de Chapecó...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Quadras Disponíveis</Text>
      
      <FlatList
        data={societies}
        keyExtractor={item => item.key}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.Nome || "Sem Nome"}</Text>
            <Text style={styles.info}>📍 {item.Endereco}</Text>
            <Text style={styles.info}>🕒 {item.Horario_atendimento}</Text>
            <Text style={styles.info}>⚽ {item.Campo}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>Nenhuma quadra encontrada.</Text>}
      />
    </SafeAreaView>
  );
}

