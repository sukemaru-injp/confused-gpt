import { generateFortune } from '../api';
import { FortuneResult, FortuneRequest } from '@/model/FortuneModel';
import { AdapterType } from '.';
import { ok, err } from 'neverthrow';

export type FortuneAdapter = AdapterType<FortuneResult>;

export const generateFortuneAdapter = async (req: FortuneRequest): Promise<FortuneAdapter> => {
  try {
    const { data } = await generateFortune(req);
    return ok(data);
  } catch (e: unknown) {
    return err({ name: 'error' as const, error: e });
  }
};
