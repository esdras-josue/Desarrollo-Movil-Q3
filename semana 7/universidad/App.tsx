import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import AsignaturaComponent from "./components/AsignaturaComponent";
import MaestroComponent from "./components/MaestroComponent";

export default function App() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.title}>Gestion Universitaria</Text>
        <Text style={styles.subtitle}>Administra asignaturas y maestros</Text>
      </View>
      <StatusBar style="auto" />

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <View style={styles.headerIcon}>
            <Text style={styles.iconText}>A</Text>
          </View>
          <Text style={styles.sectionTitle}>Asignaturas</Text>
        </View>
        <AsignaturaComponent />
      </View>

      <View style={styles.divider} />

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <View style={styles.headerIcon}>
            <Text style={styles.iconText}>M</Text>
          </View>
          <Text style={styles.sectionTitle}>Maestros</Text>
        </View>
        <MaestroComponent />
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>2026 Sistema Universitario</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
  },
  header: {
    backgroundColor: "#667eea",
    paddingVertical: 30,
    paddingHorizontal: 20,
    paddingTop: 50,
    alignItems: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 25,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.8)",
    textAlign: "center",
  },
  section: {
    paddingHorizontal: 15,
    marginBottom: 25,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  headerIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#0066FF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  iconText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#333",
  },
  divider: {
    height: 2,
    backgroundColor: "#E8E8E8",
    marginVertical: 15,
    marginHorizontal: 15,
    borderRadius: 1,
  },
  footer: {
    paddingVertical: 25,
    paddingHorizontal: 15,
    alignItems: "center",
    marginBottom: 10,
  },
  footerText: {
    fontSize: 12,
    color: "#999",
  },
});
