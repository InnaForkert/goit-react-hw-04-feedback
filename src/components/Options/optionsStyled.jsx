import styled from 'styled-components';

export const Button = styled.button`
  background-color: #cbd5dc;
  outline: 1px solid #4b5a6b;
  border-radius: 14px;
  padding: 10px 20px;
  text-transform: capitalize;
  font-family: monospace;
  font-size: 16px;
  transition-property: box-shadow, transform;
  transition-duration: 250ms;
  border: none;
  box-shadow: 1px 1px 2px black;
  cursor: pointer;

  &:hover {
    box-shadow: 2px 2px 4px black;
    transform: translateY(-2px);
  }
`;