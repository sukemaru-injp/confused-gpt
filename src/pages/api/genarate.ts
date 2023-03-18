import type { NextApiRequest, NextApiResponse } from 'next'
import { sleep } from '@/utils';
import { Configuration, OpenAIApi, CreateCompletionResponse } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const api = new OpenAIApi(configuration);


type Data = {
  result: string
}

export default async function handler(_req: NextApiRequest, res: NextApiResponse<Data>) {
  const gptResponse = await api.createCompletion({
    model: 'text-davinci-003',
    temperature: 0.5,
    prompt: ''
  })
  console.info('Complete GPT Response:', gptResponse)

  res.status(200).json({ result: 'Ok' });
}
