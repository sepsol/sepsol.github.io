import * as React from 'react';

function BackgroundIntersect({ size = '100%', color = '#88ACD0', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 446 1024"
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        width={size}
        height={size}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M232.619 0c.89 14.1 1.013 28.602 1.136 43.009.394 46.365.78 91.737 26.696 119.469 23.649 25.309 50.086 16.161 76.071 7.17 24.387-8.439 48.376-16.74 69.291 3.706 64.089 62.645 52.385 349.303-41.316 527.41-8.193 15.571-15.993 28.377-23.194 40.198-17.568 28.84-31.565 51.816-38.961 94.781-12.85 74.649 7.593 131.941 24.518 179.377 1.071 3 2.127 5.96 3.16 8.88H0V0h232.619z"
        fill={color}
        fillOpacity={0.1}
      />
    </svg>
  );
}

export default BackgroundIntersect;
