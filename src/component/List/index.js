import React, {useState, useEffect} from 'react';
import {Text, TextInput, Button, View, TouchableOpacity} from 'react-native';
import Element from './element';
import styled from 'styled-components';

const List = () => {
  const [task, setTask] = useState('none');
  const [tasks, setTasks] = useState([]);

  const handleTaskChange = value => {
    setTask(value);
  };

  const handleButton = () => {
    setTasks([...tasks, task]);
  };

  useEffect(() => {
    console.log(`[state] Task value = ${task}`);
  }, [task]);

  useEffect(() => {
    console.log(
      `[state] Tasks list = ${tasks.map(item => `${item},`).join(' ')}.`,
    );
  }, [tasks]);

  return (
    <ListContainer>
      <ListHeader>
        <Input placeholder="Add Task..." onChangeText={handleTaskChange} />
        <AddButton onPress={handleButton}>
          <AddButtonText>+</AddButtonText>
        </AddButton>
      </ListHeader>

      <ListMain>
        <Text>List</Text>
        {tasks.map(element => (
          <Element task={element} />
        ))}
      </ListMain>
    </ListContainer>
  );
};

const ListContainer = styled.View`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #a5b4fc;
`;

const ListHeader = styled.View`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const ListMain = styled.View`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

const Input = styled.TextInput`
  flex: 1;
  height: 50px;
  padding: 8px;
  margin: 5% 0;
  font-size: 16px;
  background-color: white;
  border-radius: 6px;
`;

const AddButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: #4338ca;
  border-radius: 6px;
`;

const AddButtonText = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: 700;
`;

export default List;
