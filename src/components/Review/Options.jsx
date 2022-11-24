import React from 'react';

const Options = ({ options, updateRes }) => {
  return (
    <div>
      {options.map((option, i) => {
        return (
          <button key={i} type="button" name={option} onClick={updateRes}>
            {option}
          </button>
        );
      })}
    </div>
  );
};

export default Options;
