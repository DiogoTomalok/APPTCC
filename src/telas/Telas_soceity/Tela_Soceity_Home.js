import React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
// Importação correta subindo 2 níveis até src e entrando em Styles
import { styles } from '../../Styles/Style_Soceity/Style_home_Soceity';

export default function TelaSoceityHome() {
  return (
    <ScrollView style={styles.container}>
      {/* Nome do Society */}
      <Text style={styles.headerTitle}>Alemão Soceity</Text>

      <View style={styles.row}>
        {/* Bloco de Descrição */}
        <View style={styles.descriptionContainer}>
          <Text style={styles.sectionTitle}>Descrição:</Text>
          <Text style={styles.descriptionText}>
            Localizado no bairro Aeroporto, o Alemão Society oferece gramado sintético de última geração e vestiários completos.
          </Text>
        </View>

        {/* Bloco de Localização (Simulação de Mapa) */}
        <View style={styles.mapContainer}>
          <Text style={styles.sectionTitle}>Localização:</Text>
          <View style={styles.mapPlaceholder}>
            <Text style={styles.mapIcon}>📍</Text>
            <Text style={styles.mapText}>Chapecó, SC</Text>
            <Text style={styles.mapSubText}>Bairro Aeroporto</Text>
          </View>
        </View>
      </View>

      {/* Bloco de Avaliação */}
      <View style={styles.centerSection}>
        <Text style={styles.sectionTitle}>Avaliação</Text>
        <Text style={styles.stars}>⭐⭐⭐⭐⭐</Text>
      </View>

      <View style={styles.row}>
        {/* Botão Agenda Horário */}
        <TouchableOpacity style={styles.agendaButton}>
          <Text style={styles.agendaIcon}>⚽</Text>
          <View>
            <Text style={styles.agendaText}>AGENDA</Text>
            <Text style={styles.agendaText}>HORÁRIO</Text>
          </View>
        </TouchableOpacity>

        {/* Rank de Times */}
        <View style={styles.rankContainer}>
          <Text style={styles.sectionTitle}>Rank Times</Text>
          {[1, 2, 3, 4].map((num) => (
            <View key={num} style={styles.rankItem}>
              <View style={styles.rankNumber}>
                <Text style={styles.rankNumberText}>{num}</Text>
              </View>
              <View style={styles.rankLine} />
            </View>
          ))}
        </View>
      </View>

      {/* Menu Inferior (Navegação Estática) */}
      <View style={styles.bottomNav}>
        <Text style={styles.navItem}>Home</Text>
        <Text style={[styles.navItem, styles.navActive]}>Meu Time</Text>
        <Text style={styles.navItem}>Perfil</Text>
        <Text style={styles.navItem}>Rank</Text>
      </View>
    </ScrollView>
  );
}