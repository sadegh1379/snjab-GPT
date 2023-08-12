import { Configuration, OpenAIApi } from 'openai';

const apiKey = process.env.REACT_APP_OPEN_AI_API_KEY;
console.log('check keys:', apiKey);

export const checkApiKey = async (keys) => {
  const configuration = new Configuration({
    apiKey,
  });

  const openai = new OpenAIApi(configuration);

  return openai.listModels();
};
