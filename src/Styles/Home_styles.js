// src/Styles/homeStyles.js
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f2f5', padding: 20 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#1a1a1a', marginTop: 40 },
  card: { 
    backgroundColor: '#fff', 
    padding: 20, 
    borderRadius: 12, 
    marginBottom: 15, 
    elevation: 3,
    borderLeftWidth: 5,
    borderLeftColor: '#2e7d32' 
  },
  title: { fontSize: 18, fontWeight: 'bold', color: '#2e7d32', marginBottom: 5 },
  info: { fontSize: 14, color: '#555', marginBottom: 2 },
  empty: { textAlign: 'center', marginTop: 50, color: '#888' }
});