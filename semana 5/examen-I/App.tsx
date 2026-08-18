import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import RecetaProvider from './Provider/RecetaProvider';
import FormularioReceta from './Components/FormularioReceta';
import ListaReceta from './Components/ListaReceta';
import DetalleReceta from './Components/DetalleReceta';

export default function App() {
  return (
    <RecetaProvider>
      <ScrollView>
        <FormularioReceta />
        <ListaReceta />
        <DetalleReceta />
      </ScrollView>
    </RecetaProvider>

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
