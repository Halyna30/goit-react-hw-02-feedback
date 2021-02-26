import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  section: {
    margin: {
      top: 5, // jss-plugin-default-unit makes this 5px
      right: 0,
      bottom: 0,
      left: '1rem',
    },
  },
  title: {
    fontSize: 16,
  },
});

export default useStyles;
