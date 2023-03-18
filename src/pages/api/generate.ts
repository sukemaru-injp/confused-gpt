import { isZodiacType, getZodiacLabel } from './../../model/Zodiac';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';
import { FortuneResult } from '@/model/FortuneModel';

export type BadRequest = {
  name: 'badRequest';
  detail: string;
};

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const api = new OpenAIApi(configuration);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<FortuneResult | BadRequest>,
) {
  console.info('GenerateFortune:');

  if (!isZodiacType(req.body.zodiac)) {
    res.status(400).json({ name: 'badRequest', detail: 'required zodiac' });
  }

  // console.info('GenerateFortune:requestOk', req.body.zodiac)
  // const gptResponse = await api.createCompletion({
  //   model: 'text-davinci-003',
  //   temperature: 0.5,
  //   prompt: `${getZodiacLabel(req.body.zodiac)}の今日の運勢みたいな文章を作ってください。仕事や恋愛に関することも盛り込んでください`
  // })

  // console.info('Complete GPT Response:', gptResponse.data.choices)
  // res.status(200).json({ data: gptResponse.data.choices });

  res.status(200).json({ data: 'ok' });
}
