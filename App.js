import React, { useState, useEffect } from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TodoList from './screens/todoList';
import TodoDetails from './screens/todoDetails';
import AddTodo from './screens/addTodo';
import { useColorScheme, Switch } from "react-native";
import localStorage from "./helpers/localStorage";

const Stack = createNativeStackNavigator();

export default function App() {
  const scheme = useColorScheme();
  const [theme, setTheme] = useState('light');

  useEffect(()=>{
      localStorage.getData('theme').then(
          (data)=>data && setTheme(data)
      );
  }, []);

  return (
    <NavigationContainer theme={theme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Todo List" component={TodoList} options={{
            headerRight: () => (
                <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={theme==="light" ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => {
                    let newTheme = theme==="light" ? "dark" : "light";
                    setTheme(newTheme);
                    localStorage.storeData(newTheme, 'theme');
                }}
                value={theme==="light"}
                />
            )
        }} />
        <Stack.Screen name="Todo Details" component={TodoDetails} />
        <Stack.Screen name="Add Todo" component={AddTodo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

