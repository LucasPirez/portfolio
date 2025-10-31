import React from 'react';
import AIIcon from '../../icons/AIIcon';
import MarkdownRenderer from '../util/MarkdownRenderer';

const ChatResponse = ({ answer }) => {
  if (!answer) return null;

  return (
    <div className="mb-4 p-3 bg-myDarkLightBlue/20 dark:bg-myDarkLightBlue/10 rounded-lg border-l-4 border-myDarkLightBlue">
      <div className="flex items-start space-x-2">
        <AIIcon className="w-4 h-4 mt-1 text-myDarkLightBlue flex-shrink-0" />
        <div className="text-sm leading-relaxed flex-1">
          <MarkdownRenderer content={answer} />
        </div>
      </div>
    </div>
  );
};

export default ChatResponse;
