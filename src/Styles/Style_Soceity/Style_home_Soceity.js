import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#888', // Cinza conforme o seu protótipo
    padding: 15 
  },
  headerTitle: { 
    fontSize: 26, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    color: '#fff', 
    marginTop: 40, 
    marginBottom: 20 
  },
  row: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginBottom: 20 
  },
  descriptionContainer: { 
    width: '48%' 
  },
  sectionTitle: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#fff', 
    marginBottom: 5 
  },
  descriptionText: { 
    color: '#fff', 
    fontSize: 14, 
    lineHeight: 20 
  },
  mapContainer: { 
    width: '48%' 
  },
  mapPlaceholder: { 
    backgroundColor: '#aaa', 
    height: 120, 
    borderRadius: 10, 
    justifyContent: 'center', 
    alignItems: 'center' 
    
  },
  mapIcon: { 
    fontSize: 24 
  },
  mapText: { 
    color: '#333', 
    fontWeight: 'bold' 
  },
  mapSubText: { 
    color: '#444', 
    fontSize: 10 
  },
  centerSection: { 
    alignItems: 'center', 
    marginVertical: 15 
  },
  stars: { 
    fontSize: 30, 
    letterSpacing: 5 
  },
  agendaButton: { 
    width: '45%', 
    backgroundColor: '#999', 
    height: 100, 
    borderRadius: 15, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#bbb'
  },
  agendaIcon: { 
    fontSize: 35, 
    marginRight: 10 
  },
  agendaText: { 
    color: '#fff', 
    fontWeight: 'bold', 
    fontSize: 12 
  },
  rankContainer: { 
    width: '45%' 
  },
  rankItem: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 8 
  },
  rankNumber: { 
    backgroundColor: '#bbb', 
    width: 25, 
    height: 25, 
    borderRadius: 12.5, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  rankNumberText: { 
    color: '#fff', 
    fontWeight: 'bold' 
  },
  rankLine: { 
    backgroundColor: '#999', 
    height: 12, 
    flex: 1, 
    marginLeft: 10, 
    borderRadius: 5 
  },
  bottomNav: { 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    borderTopWidth: 1, 
    borderTopColor: '#aaa', 
    paddingTop: 15, 
    marginTop: 20,
    marginBottom: 30 
  },
  navItem: { 
    color: '#fff', 
    fontSize: 16 
  },
  navActive: { 
    fontWeight: 'bold', 
    borderBottomWidth: 2, 
    borderBottomColor: '#fff' 
  }
});