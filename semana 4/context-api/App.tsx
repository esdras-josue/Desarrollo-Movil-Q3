import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FormularioEstudiante from './components/FormularioEstudiante';
import ProviderEstudiante from './provider/ProviderEstudiante';

export default function App() {
  return (
    <View style={styles.container}>
      <ProviderEstudiante>
        <FormularioEstudiante />
      </ProviderEstudiante>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
