// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { sleep } from '@/utils';
import { Hello } from '@/model';

export default async function handler(req: NextApiRequest, res: NextApiResponse<Hello>) {
  await sleep(800);
  res.status(200).json({ text: 'Hello World!!' });
}
