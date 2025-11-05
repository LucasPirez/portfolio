import { CustomError } from '../utils/CustomErrors';

export const QaService = async (question, onChunk) => {
  const url = import.meta.env.VITE_RAG_PROFILE_DESCRIPTION_URL;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        question: question.trim(),
      }),
    });

    if (!response.ok) {
      throw new CustomError('Error in QaService', response.status);
    }

    const reader = response.body?.getReader();
    const decoder = new TextDecoder();

    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value);
      const lines = chunk.split('\n');

      for (const line of lines) {
        if (line.startsWith('data: ')) {
          const data = line.slice(6);
          if (data === '[DONE]') {
            console.log('Stream finalizado');
            break;
          }
          try {
            const parsed = JSON.parse(data);

            onChunk(parsed.chunk);
          } catch (e) {
            console.log(e);
          }
        }
      }
    }
  } catch (error) {
    console.error('Error in askQuestion:', error);
    throw error;
  }
};
