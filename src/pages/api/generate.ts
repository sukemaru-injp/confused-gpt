import type { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';
import { sleep } from '@/utils';
import { CreateIntroduceRequest, GenerateResult, isCreateIntroduceRequestValue } from '@/model/CreateIntroduce';
import { getGenderLabel } from '@/model/Gender';

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

const createPrompt = (input: CreateIntroduceRequest['value']) => {
  const likes = input.likes.flatMap(({ value }) => {
    if (value === '') return []

    return [value]
  }, [])

  return `${input.age}歳、${getGenderLabel(input.gender)}です。好きなものは${likes.join('・')}です。マッチングアプリなどで使えるユーモアのある自己紹介文章を考えてください`;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GenerateResult | BadRequest | UnknownError>,
) {
  console.info('Generate:');

  if (!isCreateIntroduceRequestValue(req.body.value)) {
    return res.status(400).json({ name: 'badRequest', detail: 'value is failed' });
  }

  if (req.body.mock) {
    await sleep(5000);
    return res.status(200).json({
      data: {
        text: 'はい、こんにちは！私は、サウナ、キャンプ、そしてラーメンが大好きな25歳の男性です。これまで、サウナで身体を温め、キャンプで自然に触れ、ラーメンでお腹を満たしてきましたが、一人で楽しむのはさすがに寂しいものです。そこで、このマッチングアプリで私と一緒に、サウナで蒸され、キャンプで焚火を囲み、ラーメンでお互いの好みを語り合いませんか？もしも、あなたも同じようにこれらの趣味に興味があるのであれば、ぜひ一緒に楽しみましょう！',
      },
    });
  }

  try {
    const gptResponse = await api.createCompletion({
      model: 'text-davinci-003',
      temperature: 0.1,
      prompt: createPrompt(req.body.value),
      max_tokens: 3000,
    });

    console.info('Generate:requestOk');

    res.status(200).json({
      data: {
        text: gptResponse.data.choices[0].text ?? null,
      },
    });
  } catch (e: unknown) {
    res.status(500).json({ name: 'unknownError', error: e });
  }
}
