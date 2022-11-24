import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  text-align: center;
  font-family: mono-space;
  text-transform: capitalize;
  color: #4b5a6b;
`;

const Title = styled.h1`
  display: block;
  width: 350px;
  margin: 30px auto;
  background-color: #eddede;
  padding: 20px;
  border-radius: 25px;
  box-shadow: 1px 1px 1px #4b5a6b;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;

  ${props =>
    props.flex &&
    css`
      display: flex;
      justify-content: center;
      gap: 20px;
    `}
`;

const Section = ({ title, children, flex }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <List flex={flex}>{children}</List>
    </Container>
  );
};

export default Section;
