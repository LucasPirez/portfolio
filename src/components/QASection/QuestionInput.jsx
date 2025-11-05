import React from 'react';

const QuestionInput = ({
  question,
  onChange,
  isLoading,
  placeholder = 'Escribe tu pregunta aquí...',
}) => {
  return (
    <div className="space-y-3">
      <textarea
        value={question}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full p-3 text-sm border  border-gray-600 rounded-lg 
                    bg-myBgDark text-myDarkText
                    placeholder-gray-400
                   focus:ring-2 focus:ring-myDarkLightBlue focus:border-transparent
                   resize-none transition-all duration-200"
        rows="3"
        disabled={isLoading}
      />
    </div>
  );
};

export default QuestionInput;
