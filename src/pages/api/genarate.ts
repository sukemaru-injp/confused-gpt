import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  result: unknown
}

const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
export default async function handler(_req: NextApiRequest, res: NextApiResponse<Data>) {
  await sleep(100)
  res.status(200).json({ result: 'Ok' });
}
