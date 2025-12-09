import React from 'react';

interface WelcomeMessageProps {
  show: boolean;
}

const WelcomeMessage: React.FC<WelcomeMessageProps> = ({ show }) => {
  if (!show) return null;

  return (
    <div className="mb-4 p-3 0 bg-myDarkLightBlue/5 rounded-lg">
      <p className="text-sm text-myDarkText">
        ¡Hola! 👋 Soy el asistente de IA de Lucas. Puedes preguntarme
        sobre su experiencia, proyectos o tecnologías.
      </p>
    </div>
  );
};

export default WelcomeMessage;
