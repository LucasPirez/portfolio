import React from 'react';
import AIIcon from '../../icons/AIIcon';

interface ChatHeaderProps {
  isLoading: boolean;
  onClose: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({
  isLoading,
  onClose,
}) => {
  return (
    <div className="bg-gradient-to-r from-myDarkLightBlue to-myLightBlue p-4 text-black">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <AIIcon className="w-6 h-6" animate={isLoading} />
          <h3 className="font-semibold">AI Assistant</h3>
        </div>
        <button
          onClick={onClose}
          className="text-black hover:text-gray-700 transition-colors"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
