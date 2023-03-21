import type { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';
import { sleep } from '@/utils';
import { GenerateResult, isJobType, getJobsLabel } from '@/model/JobModel';

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
  res: NextApiResponse<GenerateResult | BadRequest | UnknownError>,
) {
  console.info('GenerateFortune:');

  if (!isJobType(req.body.job)) {
    return res.status(400).json({ name: 'badRequest', detail: 'required job type' });
  }

  if (req.body.mock) {
    await sleep(5000);
    return res.status(200).json({
      data: {
        text: `\n\n${getJobsLabel(req.body.job)}にするべき質問は以下の通りです`,
      },
    });
  }

  console.info('GenerateFortune:requestOk', req.body.zodiac);
  try {
    const gptResponse = await api.createCompletion({
      model: 'text-davinci-003',
      temperature: 0.1,
      prompt: '',
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
