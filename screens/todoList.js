import React, { useState, useEffect } from 'react';
import { FlatList, View, StyleSheet, Text } from 'react-native';
import TodoItem from '../components/todoItem';
import Button from '../components/button';
import localStorage from "../helpers/localStorage";
import { useTheme } from "@react-navigation/native";

const todoList = ({navigation}) => {
    const [todoState, setTodoState] = useState([]);
    const { colors } = useTheme();

    const markPressHandler = (key) => {
        let updatedState = todoState.map((todo) => (
            todo.key === key ? {...todo, isDone: !(todo.isDone)} : todo
        ));
        setTodoState(updatedState);
        navigation.navigate('Todo List');
    }

    const deletePressHandler = (key) => {
        let updatedState = todoState.filter((todo) => (
            todo.key !== key
        ));
        setTodoState(updatedState);
        navigation.navigate('Todo List');
    }

    const addPressHandler = (values) => {
        let item = {key: String(todoState.length > 0 ? parseInt(todoState[todoState.length-1]["key"])+1 : 0), ...values, isDone: false}
        setTodoState([...todoState, item]);
        navigation.navigate('Todo List');
    }

    useEffect(()=>{
        localStorage.getData('todo').then(
            (data)=>setTodoState(data)
        );
    }, []);

    useEffect(()=>{
        localStorage.storeData(todoState, 'todo');
    }, [todoState]);

    return (
        <View style={styles.container}>
            <Button text="+" backgroundColor="#1479e8" textColor="#fff" width="20%" fontSize="20" pressHandler={() => navigation.navigate('Add Todo', {addPressHandler})} />
            {todoState.length > 0 ?
                <FlatList
                    data={[...todoState].reverse()}
                    renderItem={({item}) => <TodoItem item={item} pressHandler={() => navigation.navigate('Todo Details', {item, markPressHandler, deletePressHandler})} />}
                    //keyExtractor={(item, index) => `${item?.key}`}
                />
            :
                <Text style={{color: colors.text}}>Currently there is no saved todo</Text>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    }
});

export default todoList;