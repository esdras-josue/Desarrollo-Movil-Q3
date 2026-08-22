import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TodoProvider from './provider/TodoProvider';
import FormularioTarea from './components/FormularioTarea';
import ListaTareas from './components/ListaTareas';

export default function App() {
  return (
    <View style={styles.container}>
      <TodoProvider>
        <FormularioTarea />
        <ListaTareas />
      </TodoProvider>
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
