import type { NextApiRequest, NextApiResponse } from 'next';
import { sleep } from '@/utils';

type Data = {
  result: unknown;
};

export default async function handler(_req: NextApiRequest, res: NextApiResponse<Data>) {
  await sleep(100);
  res.status(200).json({ result: 'Ok' });
}
