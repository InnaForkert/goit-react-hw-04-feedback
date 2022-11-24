import React from 'react';

const Statistics = ({ options, results }) => {
  return (
    <ul>
      {options.map((option, i) => {
        return (
          <li key={i}>
            {option}: {results[i]}
          </li>
        );
      })}
    </ul>
  );
};

export default Statistics;
