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
      <SafeAreaView>
        <ScrollView>
          <View>
            <Text style={styles.sectionTitle}>Simple Calculator</Text>
            <View style={styles.calcBox}>
              <Text style={styles.outputText}>
                {calculation || 'Enter a number'}
              </Text>
            </View>
            <CalcButtons updateCalculation={updateCalculation}/>
            <NumberButtons updateCalculation={updateCalculation}/>
            <DbButtons sqlOperation={sqlOperation}/>
          </View>
        </ScrollView>
        <FlatList
        data={DbDisplay}
        renderItem={({item}) => <Text style={styles.item}>{item.value}</Text>}
        />
      </SafeAreaView>
    </View>
  );
}



//style 
const styles = StyleSheet.create({
  container: {
  fontSize: 40,
  flex: 1,
  },
  calcBox: {
  height: 50,
  borderRadius: 40,
  paddingLeft: 20,
  paddingTop: 10,
  backgroundColor: 'oldlace',
  marginBottom: 10,
  borderWidth: 1,
  },
  outputText: {
  fontWeight: 'bold',
  textAlignVertical: 'center',
  textAlignment: 'right',
  fontSize: 30,
  },
  sectionTitle: {
  color: 'white',
  fontSize: 24,
  fontWeight: 'bold',
  textAlignVertical: 'center',
  },
 });