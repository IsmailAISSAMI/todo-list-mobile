import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {SvgUri} from 'react-native-svg';
import styled from 'styled-components';

const HomeScreen = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeArea>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Container>
        <Title>Home page</Title>
        {/* <Logo
          source={{
            uri: '../../assets/images/Marvel_Logo.svg.png',
          }}
        /> */}

        <Button onPress={() => navigation.navigate('LoginStack')}>
          <Text>Sign In</Text>
        </Button>
      </Container>
    </SafeArea>
  );
};

const SafeArea = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Container = styled.View`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: cyan;
`;

const Title = styled.Text`
  font-size: 48px;
  font-weight: 700;
  color: #000;
`;

// const Logo = styled.Image`
//   height: 100px;
//   width: 100px;
// `;

const Button = styled.TouchableOpacity`
  color: red;
  font-size: 50px;
`;

export default HomeScreen;
