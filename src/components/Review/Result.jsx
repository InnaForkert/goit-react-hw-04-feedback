import React from 'react';

const Result = ({ optionName, optionRes }) => {
  return (
    <li>
      {optionName}: {optionRes}
    </li>
  );
};

export default Result;
