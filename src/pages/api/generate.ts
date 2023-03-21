import { isZodiacType, getZodiacLabel } from './../../model/Zodiac';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';
import { FortuneResult } from '@/model/FortuneModel';
import { sleep } from '@/utils';

type BadRequest = {
  name: 'badRequest';
  detail: string;
};

type UnknownError = {
  name: 'unknownError';
  error: unknown;
};

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const api = new OpenAIApi(configuration);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<FortuneResult | BadRequest | UnknownError>,
) {
  console.info('GenerateFortune:');

  if (!isZodiacType(req.body.zodiac)) {
    return res.status(400).json({ name: 'badRequest', detail: 'required zodiac' });
  }

  if (req.body.mock) {
    await sleep(5000)
    return res.status(200).json({
      data: {
        text: `こんにちは！今日のMock座の運勢をお届けします。\n今日はあなたにとって、自己表現やアピールすることが大切な日となるでしょう。仕事面では、自分の能力やスキルをしっかりとアピールすることで、周りの人たちからの信頼や評価が高まるかもしれません。また、自分の意見をはっきりと伝えることで、プロジェクトの進行にも良い影響を与えることができるでしょう。\n恋愛面でも、自分自身を表現することが大切な日となるでしょう。もしかすると、あなたが気になっている人にアプローチするチャンスが訪れるかもしれません。自分の魅力をしっかりとアピールすることで、相手の心を掴むことができるでしょう。\nただし、自己中心的な行動やプライドが邪魔をすることもあるかもしれません。相手の気持ちを汲み取り、自分の感情に素直に向き合うことが大切です。\n今日は、自分自身を信じて、自己表現をすることに積極的に取り組んでみましょう。仕事や恋愛で素晴らしい結果を出すことができるかもしれません。良い一日をお過ごしください！      `,
      },
    });
  }

  console.info('GenerateFortune:requestOk', req.body.zodiac);
  try {
    const gptResponse = await api.createCompletion({
      model: 'text-davinci-003',
      temperature: 0.1,
      prompt: `${getZodiacLabel(
        req.body.zodiac,
      )}の今日の運勢みたいな文章を作ってください。仕事や恋愛に関することも盛り込んでください`,
      max_tokens: 3000,
    });
    res.status(200).json({
      data: {
        text: gptResponse.data.choices[0].text ?? null,
      },
    });
  } catch (e: unknown) {
    res.status(500).json({ name: 'unknownError', error: e });
  }
}
