import React from 'react';
import { marked } from 'marked';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
  content,
}) => {
  // Configurar marked para ser más seguro
  marked.setOptions({
    breaks: true, // Convertir saltos de línea a <br>
    gfm: true, // GitHub Flavored Markdown
  });

  // Función para preprocesar el contenido markdown
  const preprocessMarkdown = (text: string): string => {
    return text.replace(/([^\n])(\* )/g, '$1$1\n').trim();
  };

  // Función para sanitizar el HTML y prevenir XSS
  const sanitizeHtml = (html: string): string => {
    // Remover scripts y elementos peligrosos
    return html
      .replace(
        /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        ''
      )
      .replace(
        /<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi,
        ''
      )
      .replace(/javascript:/gi, '')
      .replace(/on\w+="[^"]*"/gi, '');
  };

  // Renderizar markdown a HTML
  const renderMarkdown = (): { __html: string } => {
    try {
      const processedContent = preprocessMarkdown(content);
      const rawHtml = marked(processedContent) as string;
      const sanitizedHtml = sanitizeHtml(rawHtml);
      return { __html: sanitizedHtml };
    } catch (error) {
      console.error('Error rendering markdown:', error);
      return { __html: content };
    }
  };

  return (
    <div
      className="markdown-content text-gray-700 dark:text-myDarkText"
      dangerouslySetInnerHTML={renderMarkdown()}
    />
  );
};

export default MarkdownRenderer;
