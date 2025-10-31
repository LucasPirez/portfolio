import React, { useState, useRef, useEffect } from 'react';
import AIIcon from '../../icons/AIIcon';
import ChatHeader from './ChatHeader';
import WelcomeMessage from './WelcomeMessage';
import ChatResponse from './ChatResponse';
import QuestionForm from './QuestionForm';
import QuickQuestions from './QuickQuestions';
import { CustomError } from '../../utils/CustomErrors';
import { QaService } from '../../services/qaService';

const FloatingAIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const chatRef = useRef(null);

  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        chatRef.current &&
        !chatRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!question.trim()) {
      setError('Por favor, escribe una pregunta');
      return;
    }

    setIsLoading(true);
    setError('');
    setAnswer('');

    try {
      const data = await QaService(question);
      setAnswer(data.answer || 'No se pudo obtener una respuesta');
    } catch (err) {
      if (err instanceof CustomError && err.status === 429) {
        setError(
          <span>
            Has alcanzado el límite de solicitudes. Para optimizar
            recursos, el uso está limitado a 6 consultas cada 5
            minutos. Si necesitas más información, no dudes en
            contactarme directamente a mi{' '}
            <a
              href="https://www.linkedin.com/in/lucas-pirez-8553b222b/"
              target="_blank"
              alt="linkedin"
              rel="noreferrer"
              className="text-cyan-500 font-semibold"
            >
              LinkedIn
            </a>{' '}
            o{' '}
            <a
              href="mailto:lucaspirez42@gmail.com"
              title="Send Email"
              className="text-cyan-500 font-semibold "
            >
              Gmail
            </a>{' '}
            <br />
            ¡Gracias por tu comprensión!
          </span>
        );
        return;
      }
      setError('Error al procesar la pregunta. Inténtalo de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
    if (error) setError('');
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setHasInteracted(true);
    }
  };

  return (
    <section
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
      ref={chatRef}
    >
      {!hasInteracted && !isOpen && (
        <div className="absolute -top-2 -left-2 bg-myLightRed text-white text-xs px-2 py-1 rounded-full animate-bounce z-10">
          ¡Nuevo!
        </div>
      )}

      {!hasInteracted && !isOpen && (
        <div className="absolute inset-0 rounded-full">
          <div className="absolute inset-0 rounded-full bg-myDarkLightBlue/30 animate-ping"></div>
          <div className="absolute inset-0 rounded-full bg-myDarkLightBlue/20 animate-ping animation-delay-75"></div>
        </div>
      )}

      {/* Panel de chat */}
      <div
        className={`
        absolute bottom-16 right-0 w-80 md:w-[420px] 
         bg-myBgLightSecondary dark:bg-myBgDarkSecondary 
        border border-gray-200 dark:border-gray-700
        rounded-2xl shadow-2xl overflow-hidden
        transform transition-all duration-300 ease-in-out origin-bottom-right
        ${
          isOpen
            ? 'scale-100 opacity-100 translate-y-0 animate-fade-in-up'
            : 'scale-0 opacity-0 translate-y-4 pointer-events-none'
        }
      `}
      >
        {/* Header del chat */}
        <ChatHeader
          isLoading={isLoading}
          onClose={() => setIsOpen(false)}
        />

        <div className="p-4 pt-2 max-h-96 overflow-y-auto">
          <WelcomeMessage show={!answer && !isLoading} />

          <ChatResponse answer={answer} />

          <QuestionForm
            question={question}
            onQuestionChange={handleQuestionChange}
            onSubmit={handleSubmit}
            isLoading={isLoading}
            error={error}
          />

          <QuickQuestions
            onQuestionSelect={setQuestion}
            isLoading={isLoading}
          />
        </div>
      </div>

      {/* Botón flotante */}
      <button
        onClick={toggleChat}
        className={`
          w-14 h-14 rounded-full shadow-lg transition-all duration-300
          flex items-center justify-center
          hover:scale-110 hover:shadow-xl
          ${!hasInteracted ? 'animate-pulse-glow' : ''}
          ${
            isOpen
              ? 'bg-gray-500 hover:bg-gray-600'
              : 'bg-gradient-to-r from-myDarkLightBlue to-myLightBlue hover:from-myLightBlue hover:to-myDarkLightBlue'
          }
        `}
      >
        {isOpen ? (
          <span className="text-white text-xl">✕</span>
        ) : (
          <AIIcon
            className="w-7 h-7 text-black"
            animate={!hasInteracted}
          />
        )}
      </button>

      {/* Tooltip */}
      {!isOpen && (
        <div
          className="absolute bottom-16 right-0 mb-2 mr-2 px-3 py-2 
                        bg-gray-800 text-white text-sm rounded-lg shadow-lg
                        opacity-0 hover:opacity-100 transition-opacity duration-300
                        pointer-events-none whitespace-nowrap"
        >
          ¡Pregúntame algo! 🤖
          <div className="absolute top-full right-4 border-4 border-transparent border-t-gray-800"></div>
        </div>
      )}
    </section>
  );
};

export default FloatingAIChat;
