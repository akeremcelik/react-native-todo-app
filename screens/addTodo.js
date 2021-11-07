import React from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import { Formik } from 'formik';
import Button from '../components/button';
import * as yup from 'yup';

let schema = yup.object().shape({
    title: yup.string().required().min(4),
    description: yup.string().required().min(4),
});

const addTodo = ({ route }) => {
    const { addPressHandler } = route.params;

    return (
        <View style={styles.container}>
            <Formik
            initialValues={{ title: '', description: '' }}
            validationSchema={schema}
            onSubmit={values => addPressHandler(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <View>
                    <TextInput style={styles.input}
                    placeholder='Title'
                    onChangeText={handleChange('title')}
                    onBlur={handleBlur('title')}
                    value={values.title}
                    />
                    {touched.title && errors.title &&
                        <Text style={{ fontSize: 10, color: 'red' }}>{errors.title}</Text>
                    }

                    <TextInput style={[styles.input, {height: 100}]}
                    placeholder='Description'
                    multiline
                    onChangeText={handleChange('description')}
                    onBlur={handleBlur('description')}
                    value={values.description}
                    />
                    {touched.description && errors.description &&
                        <Text style={{ fontSize: 10, color: 'red' }}>{errors.description}</Text>
                    }

                    <Button text="Add Todo" backgroundColor="#1479e8" textColor="#fff" pressHandler={handleSubmit} />
                </View>
                )}
            </Formik>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1
    },
    input: {
        borderColor: '#aaa',
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
        marginTop: 10
    }
});

export default addTodo;