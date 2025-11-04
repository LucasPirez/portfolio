import React from 'react';

interface WelcomeMessageProps {
  show: boolean;
}

const WelcomeMessage: React.FC<WelcomeMessageProps> = ({ show }) => {
  if (!show) return null;

  return (
    <div className="mb-4 p-3 bg-myDarkLightBlue/10 dark:bg-myDarkLightBlue/5 rounded-lg">
      <p className="text-sm text-gray-600 dark:text-myDarkText">
        ¡Hola! 👋 Soy el asistente de IA de Lucas. Puedes preguntarme
        sobre su experiencia, proyectos o tecnologías.
      </p>
    </div>
  );
};

export default WelcomeMessage;
