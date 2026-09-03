import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import AsignaturaComponent from './components/AsignaturaComponent';
import MaestroComponent from './components/MaestroComponent';

export default function App() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.title}>🎓 Gestión Universitaria</Text>
        <Text style={styles.subtitle}>Administra asignaturas y maestros</Text>
      </View>
      <StatusBar style="auto" />

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <View style={styles.headerIcon}>
            <Text style={styles.iconText}>📚</Text>
          </View>
          <Text style={styles.sectionTitle}>Asignaturas</Text>
        </View>
        <AsignaturaComponent />
      </View>

      <View style={styles.divider}></View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <View style={styles.headerIcon}>
            <Text style={styles.iconText}>👨‍🏫</Text>
          </View>
          <Text style={styles.sectionTitle}>Maestros</Text>
        </View>
        <MaestroComponent />
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2026 Sistema Universitario</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  header: {
    backgroundColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    paddingVertical: 30,
    paddingHorizontal: 20,
    paddingTop: 50,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 25,
    backgroundColor: '#667eea',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  section: {
    paddingHorizontal: 15,
    marginBottom: 25,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  headerIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#0066FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  iconText: {
    fontSize: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
  },
  divider: {
    height: 2,
    backgroundColor: '#E8E8E8',
    marginVertical: 15,
    marginHorizontal: 15,
    borderRadius: 1,
  },
  footer: {
    paddingVertical: 25,
    paddingHorizontal: 15,
    alignItems: 'center',
    marginBottom: 10,
  },
  footerText: {
    fontSize: 12,
    color: '#999',
  },
});
