import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './FeedbackOptionsStyles';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const classes = useStyles();

  return (
    <div>
      <button type="button" onClick={onLeaveFeedback} className={classes.btn}>
        Good
      </button>
      <button type="button" onClick={onLeaveFeedback} className={classes.btn}>
        Neutral
      </button>
      <button type="button" onClick={onLeaveFeedback} className={classes.btn}>
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
