import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  btn: {
    marginLeft: 10,
    background: 'pink',
    border: 'none',
    borderRadius: 5,
    outline: 'none',
    '&:hover': {
      transform: 'scale(1.1)',
      color: 'white',
    },
  },
});

export default useStyles;
