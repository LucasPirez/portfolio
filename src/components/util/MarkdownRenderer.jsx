import React from 'react';
import { marked } from 'marked';

const MarkdownRenderer = ({ content }) => {
  // Configurar marked para ser más seguro
  marked.setOptions({
    breaks: true, // Convertir saltos de línea a <br>
    sanitize: false, // Lo haremos manualmente
    gfm: true, // GitHub Flavored Markdown
    tables: true, // Soporte para tablas
  });

  // Función para preprocesar el contenido markdown
  const preprocessMarkdown = (text) => {
    return text.replace(/([^\n])(\* )/g, '$1$1\n').trim();
  };

  // Función para sanitizar el HTML y prevenir XSS
  const sanitizeHtml = (html) => {
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
  const renderMarkdown = () => {
    try {
      const processedContent = preprocessMarkdown(content);
      const rawHtml = marked(processedContent);
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
