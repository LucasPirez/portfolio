import React, { useState, useRef, useEffect } from 'react';
import { buttonPrimary } from '../util/classButtons';
import { QaService } from '../../services/qaService';
import AIIcon from '../../icons/AIIcon';
import MarkdownRenderer from '../util/MarkdownRenderer';
import { CustomError } from '../../utils/CustomErrors';

const FloatingAIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [hasInteracted, setHasInteracted] = useState(false);
  const chatRef = useRef(null);

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

    setHasInteracted(true);
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
            recursos, el uso está limitado a 4 consultas cada 15
            minutos y un máximo de 8 consultas diarias. Si necesitas
            más información, no dudes en contactarme directamente a mi{' '}
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

  const quickQuestions = [
    'Cuéntame sobre tu experiencia',
    '¿Qué Tecnologias conoce, y en cuales se destaca?',
  ];

  return (
    <div
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
        absolute bottom-16 right-0 w-72 sm:w-80 md:w-96 
        max-w-[calc(100vw-2rem)] max-h-[calc(100vh-8rem)]
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
        <div className="bg-gradient-to-r from-myDarkLightBlue to-myLightBlue p-4 text-black">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <AIIcon className="w-6 h-6" animate={isLoading} />
              <h3 className="font-semibold">AI Assistant</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-black hover:text-gray-700 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="p-4 pt-2 max-h-96 overflow-y-auto">
          {!answer && !isLoading && (
            <div className="mb-4 p-3 bg-myDarkLightBlue/10 dark:bg-myDarkLightBlue/5 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-myDarkText">
                ¡Hola! 👋 Soy el asistente de IA de Lucas. Puedes
                preguntarme sobre su experiencia, proyectos o
                tecnologías.
              </p>
            </div>
          )}

          {/* Respuesta */}
          {answer && (
            <div className="mb-4 p-3 bg-myDarkLightBlue/20 dark:bg-myDarkLightBlue/10 rounded-lg border-l-4 border-myDarkLightBlue">
              <div className="flex items-start space-x-2">
                <AIIcon className="w-4 h-4 mt-1 text-myDarkLightBlue flex-shrink-0" />
                <div className="text-sm leading-relaxed flex-1">
                  <MarkdownRenderer content={answer} />
                </div>
              </div>
            </div>
          )}

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <textarea
                value={question}
                onChange={handleQuestionChange}
                placeholder="Escribe tu pregunta aquí..."
                className="w-full p-3 text-sm border border-gray-300 dark:border-gray-600 rounded-lg 
                         bg-myBgLightSecondary dark:bg-myBgDark text-gray-800 dark:text-myDarkText
                         placeholder-gray-500 dark:placeholder-gray-400
                         focus:ring-2 focus:ring-myDarkLightBlue focus:border-transparent
                         resize-none transition-all duration-200"
                rows="3"
                disabled={isLoading}
              />
              {error && (
                <p className="text-myLightRed text-sm mt-1 flex items-center">
                  <span className="mr-1">⚠️</span>
                  {error}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading || !question.trim()}
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
          </form>

          {/* Preguntas rápidas */}
          <div className="mt-4">
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
              Preguntas rápidas:
            </p>
            <div className="flex flex-wrap gap-1">
              {quickQuestions.map((q, index) => (
                <button
                  key={index}
                  onClick={() => setQuestion(q)}
                  className="text-xs px-2 py-1 bg-myBgLight/50 dark:bg-myBgBlue/50 
                           text-gray-600 dark:text-myDarkText rounded-full
                           hover:bg-myDarkLightBlue/20 dark:hover:bg-myDarkLightBlue/20
                           transition-colors duration-200"
                  disabled={isLoading}
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
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
    </div>
  );
};

export default FloatingAIChat;
