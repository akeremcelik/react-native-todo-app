import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const todoItem = ({item, pressHandler}) => {
    return (
        <TouchableOpacity onPress={pressHandler}>
            <Text style={[styles.item, item.isDone && {backgroundColor: "#00ff00"}]}>{item.title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#aaa',
        borderWidth: 1,
        borderRadius: 10
    },
});

export default todoItem;