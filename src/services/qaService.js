import { CustomError } from '../utils/CustomErrors';

export const QaService = async (question) => {
  const url = import.meta.env.VITE_RAG_PROFILE_DESCRIPTION_URL;
  console.log(url);

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

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error in askQuestion:', error);
    throw error;
  }
};
