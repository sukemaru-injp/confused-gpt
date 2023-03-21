import type { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';
import { sleep } from '@/utils';
import { GenerateResult, isJobType, getJobsLabel, JobType } from '@/model/JobModel';

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

const createPrompt = (input: JobType) => {
  return `${getJobsLabel(input)}職の採用面接で聞くべき質問を考えてください`;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GenerateResult | BadRequest | UnknownError>,
) {
  console.info('Generate:');

  if (!isJobType(req.body.job)) {
    return res.status(400).json({ name: 'badRequest', detail: 'required job type' });
  }

  if (req.body.mock) {
    await sleep(5000);
    return res.status(200).json({
      data: {
        text: `\n\n1.なぜこのキャリアを選びましたか？\n2.戦略を立てる上で、最も重要な要素は何だと思いますか？\n3.デジタルマーケティングを使ったことがありますか？どのようにして活用しているか教えてください。`,
      },
    });
  }

  try {
    const gptResponse = await api.createCompletion({
      model: 'text-davinci-003',
      temperature: 0.1,
      prompt: createPrompt(req.body.job),
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
