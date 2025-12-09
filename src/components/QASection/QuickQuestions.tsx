import React from 'react';

const quickQuestions: string[] = [
  '¿Qué stack tecnico tiene?',
  '¿Qué frameworks de testing conoce?',
  '¿Experiencia con Domain-Driven Design?',
  '¿Que habilidades complementarias posee?',
];

interface QuickQuestionsProps {
  onQuestionSelect: (question: string) => void;
  isLoading: boolean;
}

const QuickQuestions: React.FC<QuickQuestionsProps> = ({
  onQuestionSelect,
  isLoading,
}) => {
  return (
    <div className="mt-4">
      <p className="text-xs  text-gray-400 mb-2">
        Preguntas rápidas:
      </p>
      <div className="flex flex-col flex-wrap gap-1">
        {quickQuestions.map((question, index) => (
          <button
            key={index}
            onClick={() => onQuestionSelect(question)}
            className="text-xs px-2 py-1  bg-myBgBlue/50 
                      text-myDarkText rounded-full w-fit
                      hover:bg-myDarkLightBlue/20
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
