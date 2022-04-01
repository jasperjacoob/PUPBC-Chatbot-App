import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet, Button, Image , Alert, Text, TouchableOpacity, Dimensions } from 'react-native';

function Main({navigation}) {
    const pressHandler = () =>{
        navigation.push('Home');
    }


    return (
      <View style={styles.Container}>
      <StatusBar style='auto'/>
        <Image style={styles.logo} source={require('../assets/kanzi2.png')}/>
        <TouchableOpacity onPress={pressHandler}>
        <View style={styles.button}>
            <Text style={styles.buttonText}> Let's Get Started </Text>
        </View>
        </TouchableOpacity>

      </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: "whitesmoke",
        justifyContent: 'center',
        alignItems: "center",

    },
    button: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10, 
        backgroundColor: 'maroon',
        width: Dimensions.get('screen').width - 125,
        

    },
    buttonText: {
        textAlign: 'center',
        marginVertical: 8,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 14,
        color: 'white',
      },

    logo: {
        marginBottom: 10,
        width: 340,
        height: 340,
    }, 

});

export default Main;