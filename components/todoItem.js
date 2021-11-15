import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

const todoItem = ({item, pressHandler}) => {
    const { colors } = useTheme();

    return (
        <TouchableOpacity onPress={pressHandler}>
            <Text style={[styles.item, {color: colors.text}, item.isDone && {backgroundColor: "#00af00"}]}>{item.title}</Text>
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