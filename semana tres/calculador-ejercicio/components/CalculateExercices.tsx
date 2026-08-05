import { View, Text } from 'react-native';
import {TrainingData} from "../interfaces/TrainingData";
import React from 'react';

export default function CalculateExercises({
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average}
    :TrainingData) {

  return (
    <View>
       <Text>Calculate Exercises</Text>
       <Text>Period Length: {periodLength}</Text>
       <Text>Training Days: {trainingDays}</Text>
       <Text>Success:{success}</Text>
       <Text>Rating: {rating}</Text>
      <Text>Rating Description: {ratingDescription}</Text> 
      <Text>Target: {target}</Text> 
      <Text>Avarage: {average}</Text>
    </View>
  );
}