import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import MascotaProvider from './Provider/MascotaProvider';
import ModoNoche from './components/ModoNoche';
import Indicadores from './components/Indicadores';
import PanelAcciones from './components/PanelAcciones';
import Bitacora from './components/Bitacora';
import Cabecera from './components/Cabecera';



export default function App() {
  return (
    <MascotaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.contenido}>
            <Cabecera />
            <ModoNoche />
            <Indicadores />
            <PanelAcciones />
            <Bitacora />          
          </View>
        </ScrollView>
      </SafeAreaView>
    </MascotaProvider>

  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    contenido: {
        padding: 20,
    },
});;
