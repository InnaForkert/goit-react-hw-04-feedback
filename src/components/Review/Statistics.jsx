import React from 'react';

const Statistics = ({ options, results, total }) => {
  const positive = Math.round((results[0] / total) * 100);
  return (
    <ul>
      {options.map((option, i) => {
        return (
          <li key={i}>
            {option[0].toUpperCase() + option.slice(1)}: {results[i]}
          </li>
        );
      })}
      <li>Total: {total}</li>
      <li>Positive: {total ? positive + '%' : 'No reviews yet!'}</li>
    </ul>
  );
};

export default Statistics;
