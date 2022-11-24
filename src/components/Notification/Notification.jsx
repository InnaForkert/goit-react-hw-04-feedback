import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const P = styled.p`
  font-family: monospace;
  font-size: 20px;
`;

const Notification = ({ message }) => {
  return <P>{message}</P>;
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
