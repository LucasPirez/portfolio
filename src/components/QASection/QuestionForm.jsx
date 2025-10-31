import React from 'react';
import QuestionInput from './QuestionInput';
import SubmitButton from './SubmitButton';
import ErrorMessage from './ErrorMessage';

const QuestionForm = ({
  question,
  onQuestionChange,
  onSubmit,
  isLoading,
  error,
}) => {
  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <QuestionInput
        question={question}
        onChange={onQuestionChange}
        isLoading={isLoading}
      />
      <ErrorMessage error={error} />
      <SubmitButton
        isLoading={isLoading}
        disabled={isLoading || !question.trim()}
      />
    </form>
  );
};

export default QuestionForm;
