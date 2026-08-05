import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CalculateExercises from './components/CalculateExercices';
import { calculateExercises } from './calculateExercises';

export default function App() {
  const result = calculateExercises ([3, 0, 2, 4.5, 0, 3, 1],2);
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CalculateExercises 
        periodLength = {result.periodLength}
        trainingDays={result.trainingDays}
        success={result.success}
        rating={result.rating}
        ratingDescription={result.ratingDescription}
        target={result.target}
        average={result.average}
      />
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