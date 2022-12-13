import styled, { css } from 'styled-components';

export const Container = styled.div`
  text-align: center;
  font-family: mono-space;
  text-transform: capitalize;
  color: #4b5a6b;
`;

export const Title = styled.h1`
  display: block;
  width: 350px;
  margin: 30px auto;
  background-color: #eddede;
  padding: 20px;
  border-radius: 25px;
  box-shadow: 1px 1px 1px #4b5a6b;
`;

export const List = styled.ul`
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