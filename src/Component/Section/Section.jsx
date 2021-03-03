import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './SectionStyles';

const Section = ({ title, children }) => {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <h2 className={classes.title}>{title}</h2>
      {children}
    </section>
  );
};

Section.defaultProps = {
  title: '',
  children: [],
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
