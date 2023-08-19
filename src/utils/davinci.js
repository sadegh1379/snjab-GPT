import { Configuration, OpenAIApi } from 'openai';

export const davinci = async (prompt, key) => {
  const configuration = new Configuration({
    // apiKey: process.env.REACT_APP_OPEN_AI_API_KEY,
    apiKey: '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',
    // basePath: 'https://aisnjob.com',
  });

  const openai = new OpenAIApi(configuration);
 
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: "system",
        content: "You are ChatGPT. Respond to the user like you normally would.",
      },
      { role: 'user', content: 'hi' },
      { role: 'assistant', content: 'Hi! How can I help you?' },
      { role: 'user', content: `${prompt}?` },
    ],
    temperature: 0.3,
    max_tokens: 1000,
  });

  return response;
};
