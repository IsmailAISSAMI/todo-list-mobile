import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';

const Element = ({task}) => {
  return(<Task>{task}</Task>);
};

const Task = styled.Text`
  width: 90%;
  min-width: 250px;
  margin: 5% 0;
  padding: 6px 10px;
  background-color: #fff;
  border-radius: 6px;
`;



export default Element;
