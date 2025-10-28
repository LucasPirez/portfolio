import React from 'react';

const AIIcon = ({ className = 'w-6 h-6', animate = false }) => {
  return (
    <svg
      className={`${className} ${animate ? 'animate-pulse' : ''}`}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
      <path d="M19 11L19.74 13.91L23 15L19.74 16.09L19 19L18.26 16.09L15 15L18.26 13.91L19 11Z" />
      <path d="M5 11L5.74 13.91L9 15L5.74 16.09L5 19L4.26 16.09L1 15L4.26 13.91L5 11Z" />
    </svg>
  );
};

export default AIIcon;
