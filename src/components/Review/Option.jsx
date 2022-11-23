import React from 'react';

const Option = ({ optionName, updateRes }) => {
  return (
    <button type="button" onClick={updateRes}>
      {optionName}
    </button>
  );
};

export default Option;
