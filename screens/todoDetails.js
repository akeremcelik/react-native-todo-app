import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Button from '../components/button';

const todoDetails = ({ route }) => {
    const { item, markPressHandler, deletePressHandler } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={{marginBottom: 30}}>{item.description}</Text>

            <Button text={item.isDone ? "Mark as undone" : "Mark as done"} backgroundColor={item.isDone ? "#ff0000" : "#00af00"} textColor="#fff" pressHandler={() => markPressHandler(item.key)} />
            <Button text="Delete" backgroundColor="#c34f12" textColor="#fff" pressHandler={() => deletePressHandler(item.key)} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1
    },
    title: {
        fontWeight: 'bold'
    }
});

export default todoDetails;