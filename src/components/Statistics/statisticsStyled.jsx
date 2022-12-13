import styled, { css } from 'styled-components';

export const Li = styled.li`
  width: 300px;
  margin: 0 auto;
  font-size: 20px;
  font-family: monospace;
  padding: 3px;

  &:nth-child(odd) {
    background-color: #cbd5dc;
  }

  ${props =>
    props.bold &&
    css`
      font-weight: 700;
    `}
`;
