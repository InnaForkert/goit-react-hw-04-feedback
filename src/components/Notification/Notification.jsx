import PropTypes from 'prop-types';
import { P } from './notificationStyled';

const Notification = ({ message }) => {
  return <P>{message}</P>;
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
