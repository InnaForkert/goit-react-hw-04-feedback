import React from 'react';
import styled, { css } from 'styled-components';

const Li = styled.li`
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

const Statistics = ({ options, results, total }) => {
  const positive = Math.round((results[0] / total) * 100);
  return (
    <>
      {options.map((option, i) => {
        return (
          <Li key={i}>
            {option[0].toUpperCase() + option.slice(1)}: {results[i]}
          </Li>
        );
      })}
      <Li bold>Total: {total}</Li>
      <Li bold>Positive: {total ? positive + '%' : 'No reviews yet!'}</Li>
    </>
  );
};

export default Statistics;
