import React from 'react';
import Avatar from '../avatar';
import {CommonText} from '../texts';
import styled from 'styled-components';

const Card = ({urlImage, name}) => {
  return (
    <Container>
      <Avatar urlImage={urlImage} />
      <CommonText>{name}</CommonText>
    </Container>
  );
};

const Container = styled.View`
  padding: 12px;
  background-color: red;
  justify-content: center;
`;

const CommonText = styled.Text`
  font-size: 64px;
`

export default Card;
