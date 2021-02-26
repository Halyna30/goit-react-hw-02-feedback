import React from 'react';
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

export default Section;
