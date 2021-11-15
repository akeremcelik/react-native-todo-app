import React from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import tools from "./tools";

const storeData = async (value, key) => {
    try {
        const jsonValue = typeof value === "object" ? JSON.stringify(value) : value;
        await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
        // error
    }
}

const getData = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key)
        return tools.isJson(jsonValue) ? JSON.parse(jsonValue) : jsonValue;
    } catch(e) {
        // error
    }
}

export default {storeData, getData}
