import React from 'react';

const Options = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map((option, i) => {
        return (
          <li key={i}>
            <button type="button" name={option} onClick={onLeaveFeedback}>
              {option}
            </button>
          </li>
        );
      })}
    </>
  );
};

export default Options;
