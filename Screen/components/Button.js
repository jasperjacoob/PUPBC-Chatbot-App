import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
 
export default function FlatButton({ text, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}
 
const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 10,
        backgroundColor: '#BB371A',
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    }
});