import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TodoList from './screens/todoList';
import TodoDetails from './screens/todoDetails';
import AddTodo from './screens/addTodo';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Todo List" component={TodoList} />
        <Stack.Screen name="Todo Details" component={TodoDetails} />
        <Stack.Screen name="Add Todo" component={AddTodo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

