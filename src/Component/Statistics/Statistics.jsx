import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './StatisticsStyles';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const classes = useStyles();

  return (
    <>
      <p className={classes.item}>Good : {good}</p>
      <p className={classes.item}>Neutral : {neutral}</p>
      <p className={classes.item}>Bad : {bad}</p>
      <p className={classes.item}>Total : {total}</p>
      <p className={classes.item}>Positive feedback : {positivePercentage}%</p>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
