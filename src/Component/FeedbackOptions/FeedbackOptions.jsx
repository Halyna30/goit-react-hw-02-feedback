import React from 'react';
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

export default FeedbackOptions;
