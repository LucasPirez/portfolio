import React from 'react';
import { buttonPrimary } from '../util/classButtons';
import AIIcon from '../../icons/AIIcon';

const SubmitButton = ({ isLoading, disabled }) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`${buttonPrimary} w-full px-4 py-2 text-sm rounded-lg font-medium
                 transition-all duration-200 flex items-center justify-center
                 disabled:opacity-50 disabled:cursor-not-allowed
                 ${isLoading ? 'animate-pulse' : ''}`}
    >
      {isLoading ? (
        <>
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black mr-2"></div>
          Pensando...
        </>
      ) : (
        <>
          <AIIcon className="w-4 h-4 mr-2" />
          Preguntar
        </>
      )}
    </button>
  );
};

export default SubmitButton;
