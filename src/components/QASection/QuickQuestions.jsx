import React from 'react';

const quickQuestions = [
  '¿Qué stack tecnico tiene?',
  '¿Qué frameworks de testing conoce?',
  '¿Experiencia con Domain-Driven Design?',
  '¿Que habilidades complementarias posee?',
];

const QuickQuestions = ({ onQuestionSelect, isLoading }) => {
  return (
    <div className="mt-4">
      <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
        Preguntas rápidas:
      </p>
      <div className="flex flex-col flex-wrap gap-1">
        {quickQuestions.map((question, index) => (
          <button
            key={index}
            onClick={() => onQuestionSelect(question)}
            className="text-xs px-2 py-1 bg-myBgLight/50 dark:bg-myBgBlue/50 
                     text-gray-600 dark:text-myDarkText rounded-full w-fit
                     hover:bg-myDarkLightBlue/20 dark:hover:bg-myDarkLightBlue/20
                     transition-colors duration-200 disabled:pointer-events-none"
            disabled={isLoading}
          >
            {question}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickQuestions;
