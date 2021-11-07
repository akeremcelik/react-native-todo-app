import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const button = ({text, backgroundColor, textColor, width, fontSize, pressHandler}) => {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: backgroundColor, width: width && width}]} onPress={pressHandler}>
            <Text style={[styles.text, {color: textColor, fontSize: fontSize && parseInt(fontSize)}]}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        padding: 10,
        marginVertical: 5
    },
    text: {
        textAlign: 'center',
        fontWeight: 'bold'
    }
});

export default button;