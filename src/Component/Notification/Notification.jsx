import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  item: {
    width: 200,
    color: 'red',
  },
});
const Notification = ({ message }) => {
  const classes = useStyles();
  return <p className={classes.item}>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
