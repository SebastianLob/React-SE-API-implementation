import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { alertStateSelector } from './selectors';
import { hideAlert } from './actions';
import Alert from 'react-bootstrap/Alert';
import './index.css';

function SimpleAlert() {
  const alertState = useSelector(alertStateSelector);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(hideAlert());
  };
  return (
    <Alert
      show={alertState.open}
      variant={alertState.type}
      onClose={handleClose}
      dismissible
      className='Alert'
    >
      <Alert.Heading>{alertState.title}</Alert.Heading>
      <p>{alertState.message}</p>
      <hr />
    </Alert>
  );
}

export default SimpleAlert;
