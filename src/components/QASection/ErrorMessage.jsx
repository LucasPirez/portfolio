import React from 'react';

const ErrorMessage = ({ error }) => {
  if (!error) return null;

  return (
    <p className="text-myLightRed text-sm mt-1 flex items-start">
      <span className="mr-1 mt-0.5">⚠️</span>
      <span className="flex-1">{error}</span>
    </p>
  );
};

export default ErrorMessage;
