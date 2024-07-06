// import PropTypes from 'prop-types';
import style from './ErrorMessage.module.css';
import React from 'react';


interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <div className={style.errorMessage}>{message}</div>
);

// ErrorMessage.propTypes = {
//   message: PropTypes.string.isRequired,
// };

export default ErrorMessage;
