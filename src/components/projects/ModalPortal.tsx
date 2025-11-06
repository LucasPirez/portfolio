import { useEffect, ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface ModalPortalProps {
  children: ReactNode;
}

export function ModalPortal({ children }: ModalPortalProps) {
  const portalNode = document.createElement('div');

  useEffect(() => {
    document.body.appendChild(portalNode);

    return () => {
      portalNode.remove();
    };
  }, [portalNode]);

  return ReactDOM.createPortal(children, portalNode);
}
