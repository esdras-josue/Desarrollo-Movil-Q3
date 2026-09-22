import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Nav from './components/Nav';
import AgregarProducto from './pages/AgregarProducto';
import MostrarProductos from './pages/MostrarProductos';

import ProductoProvider, { useContextProducto } from './Provider/ProductoProvider';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import DetallesProductos from './pages/DetallesProductos';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <ProductoProvider>
      <NavigationContainer>
        <Tab.Navigator>

          <Tab.Screen
            name='Productos'
            component={MostrarProductos}
          />

          <Tab.Screen 
            name='CrearProducto'
            component={AgregarProducto}
          />

          <Tab.Screen 
            name='DetallesProductos'
            component={DetallesProductos}
          />

        </Tab.Navigator>
      </NavigationContainer>
    </ProductoProvider>
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
