import React from 'react';

const Section = ({ title, children }) => {
  return (
    <>
      <h1>{title}</h1>
      <ul>{children}</ul>
    </>
  );
};

export default Section;
