import React from 'react'

const isJson = (value) => {
    try {
        let jsonValue = JSON.parse(value);
        return true;
    } catch (e) {
        return false;
    }
}

export default {isJson}