import { StyleSheet, View } from "react-native";
import React from "react";
import {TouchableOpacityButton} from './AllButtons';

export const NumberButtons = ({updateCalculation}) => {
    return(
        <View>
            <View style={styles.rowcontainer}>
                <TouchableOpacityButton
                style={styles.button}
                text="0"
                onPress={() => updateCalculation('0')}
                />
               
                <TouchableOpacityButton
                style={styles.button}
                text="0"
                onPress={() => updateCalculation('1')}
                />
                
                <TouchableOpacityButton
                style={styles.button}
                text="0"
                onPress={() => updateCalculation('2')}
                />
                
        </View>

        <View style={styles.rowcontainer}>
                <TouchableOpacityButton
                style={styles.button}
                text="0"
                onPress={() => updateCalculation('3')}
                />
               
                <TouchableOpacityButton
                style={styles.button}
                text="0"
                onPress={() => updateCalculation('4')}
                />
                
                <TouchableOpacityButton
                style={styles.button}
                text="0"
                onPress={() => updateCalculation('5')}
                />
                
        </View>

        <View style={styles.rowcontainer}>
                <TouchableOpacityButton
                style={styles.button}
                text="0"
                onPress={() => updateCalculation('6')}
                />
               
                <TouchableOpacityButton
                style={styles.button}
                text="0"
                onPress={() => updateCalculation('7')}
                />
                
                <TouchableOpacityButton
                style={styles.button}
                text="0"
                onPress={() => updateCalculation('8')}
                />
                
        </View>

        <View style={styles.rowcontainer}>
                <TouchableOpacityButton
                style={styles.button}
                text="0"
                onPress={() => updateCalculation('9')}
                />
               
                <TouchableOpacityButton
                style={styles.button}
                text="0"
                onPress={() => updateCalculation('.')}
                />
                
                <TouchableOpacityButton
                style={styles.button}
                text="0"
                onPress={() => updateCalculation('del')}
                />
                
        </View>

        <View style={styles.rowcontainer}>
                <TouchableOpacityButton
                style={styles.button}
                text="0"
                onPress={() => updateCalculation('=')}
                />
               
                <TouchableOpacityButton
                style={styles.button}
                text="0"
                onPress={() => updateCalculation('clear')}
                />
                
        </View>

        </View>
    );
    };

    //style below

    const styles = StyleSheet.create({
        rowcontainer: {
        flexDirection: 'row',
        alignContent: 'flex-start',
        flexWrap: 'wrap',
        },
       });
       
