//imports
import { SafeAreaView, ScrollView, StyleSheet, Text, View, ImageBackground, FlatList,}
from 'react-native';
import {React, useState} from 'react';
import {CalcButtons} from './Components/calcbuttons';
import {NumberButtons} from './Components/NumberButtons';
import {DbButtons} from './Components/DbButtons';

const App = () => {
  const [calculation, setCalculation] = useState('');
  const [DbDisplay, setDbDisplay] = useState([]);

  const updateCalculation = value => {
    setCalculation(calculation + String(value)); //add the value to the growing string
    console.log('updateCalculation all', calculation);
    //if you press = then ecaluate the calculation
    if (value === '='){
      let calc = calculation;
      let answer = new Function('return ' + calc)();

      setCalculation(calc + '='+ answer);
    }
    if (value === 'del'){
      const result = calculation.slice(0,-1); //removes the last element from the string
      console.log('updateCalculation DEL', result);
      setCalculation(result);
    }
    };
  


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
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
