import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  svg: {
    width: '40px', // Adjust size as needed
    height: '40px', // Adjust size as needed
    position: 'absolute',
    
    zIndex: 10,
  },
}));

export const Logo = () => {
  const classes = useStyles();

  return (
    <svg
      className={classes.svg}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer Circle */}
      <circle cx="100" cy="100" r="95" stroke="white" strokeWidth="10" fill="none" />

      {/* RS Text */}
      <text
        x="50%"
        y="50%"
        fontFamily="Arial, sans-serif"
        fontSize="70"
        fill="white"
        textAnchor="middle"
        dominantBaseline="middle"
        fontWeight="bold"
      >
        RS
      </text>

      {/* Custom line modification for 'R' */}
      <path d="M80 120 Q85 110 100 130" stroke="white" strokeWidth="6" fill="none" />
    </svg>
  );
};
