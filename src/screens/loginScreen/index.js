import React, {useState, useEffect} from 'react';
import {Text, View, TextInput, Image, Button} from 'react-native';
import axios from 'axios';
import validator from 'email-validator';
import styled from 'styled-components';

const LoginScreen = () => {
  const [user, setUser] = useState({email: '', password: ''});
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    console.log(`user= ${user.email} ${user.password}`);
  }, [user]);

  return (
    <LoginForm>
      <TextInput
        onChangeText={value => setUser({...user, email: value})}
        value={user.email}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        onChangeText={value => setUser({...user, password: value})}
        value={user.password}
        placeholder="Password"
        secureTextEntry
      />
      <Button
        title="Sign In"
        onPress={() =>
          validator.validate(user.email)
            ? null
            : setErrorMessage('Invalid email address !')
        }
      />
      {errorMessage ? (
        <MessageText state="error">{errorMessage}</MessageText>
      ) : null}
    </LoginForm>
  );
};

const LoginForm = styled.View`
    display: flex;
    flex-direction: column;
    //justify-content:center;
    align-items: center;
`;

const MessageText = styled.Text`
  color: ${({state}) => (state === 'error' ? 'red' : 'green')};
`;

export default LoginScreen;
