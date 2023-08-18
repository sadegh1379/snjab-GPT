import { Configuration, OpenAIApi } from 'openai';

export const davinci = async (prompt, key) => {
  const configuration = new Configuration({
    // apiKey: process.env.REACT_APP_OPEN_AI_API_KEY,
    apiKey: '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',
    basePath: 'https://aisnjob.com',
  });

  const openai = new OpenAIApi(configuration);

  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content:
          "you're an a AI assistant that replies to all my questions in markdown format.",
      },
      { role: 'user', content: 'hi' },
      { role: 'assistant', content: 'Hi! How can I help you?' },
      { role: 'user', content: `${prompt}?` },
    ],
    temperature: 0.3,
    max_tokens: 1000,
    top_p: 0.3,
    frequency_penalty: 0.5,
    presence_penalty: 0.2,
    
  });

  return response;
};
