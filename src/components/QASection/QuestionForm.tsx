import React, { ChangeEvent, FormEvent, ReactNode } from 'react';
import QuestionInput from './QuestionInput';
import SubmitButton from './SubmitButton';
import ErrorMessage from './ErrorMessage';

interface QuestionFormProps {
  question: string;
  onQuestionChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
  error: string | ReactNode | null;
}

const QuestionForm: React.FC<QuestionFormProps> = ({
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
