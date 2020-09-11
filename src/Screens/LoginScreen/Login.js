import React, {useState} from 'react';
import {Alert, Button, TextInput, Text, View, StyleSheet} from 'react-native';
import styles from "./styles";

export const ValidationErrors = {
    FormEmpty: 'Form fields cannot be blank',
    UsernameEmpty: 'Username cannot be blank',
    PasswordEmpty: 'Password cannot be blank',
};
const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [validationError, setValidationError] = useState('');

    const onLogin = () => {
        if (userName.length === 0 && password.length === 0) {
            setValidationError(ValidationErrors.FormEmpty);
        } else if (userName.length === 0) {
            setValidationError(ValidationErrors.UsernameEmpty);
        } else if (password.length === 0) {
            setValidationError(ValidationErrors.PasswordEmpty);
        }
        else {
            Alert.alert('Credentials', `${userName} + ${password}`);
        }
    };
    return (
        <View style={styles.container}>
            {validationError.length !== 0 && (
                <Text testID={'text-error'} style={styles.errorText}>
                    {validationError}
                </Text>
            )}

            <TextInput
                testID={'input-username'}
                value={userName}
                onChangeText={(text) => setUserName(text)}
                placeholder={'Username'}
                style={styles.input}
            />
            <TextInput
                testID={'input-password'}
                value={password}
                onChangeText={(text) => setPassword(text)}
                placeholder={'Password'}
                secureTextEntry={true}
                style={styles.input}
            />

            <Button
                testID={'submit-button'}
                title={'Login'}
                style={styles.input}
                onPress={onLogin}
            />
        </View>
    );
};

export default Login;