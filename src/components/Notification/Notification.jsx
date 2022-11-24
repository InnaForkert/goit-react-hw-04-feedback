import React from 'react';
import styled from 'styled-components';

const P = styled.p`
  font-family: monospace;
  font-size: 20px;
`;

const Notification = ({ message }) => {
  return <P>{message}</P>;
};

export default Notification;
