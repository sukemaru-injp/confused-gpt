import { getHello } from '../api';
import { ok, err } from 'neverthrow';
import { AdapterType } from '.';
import { Hello } from '@/model';

export type HelloAdapter = AdapterType<Hello>;

export const helloAdapter = async (): Promise<HelloAdapter> => {
  try {
    const { data } = await getHello({ req: 'オネシャス' });
    return ok(data);
  } catch (e: unknown) {
    return err({ name: 'error' as const, error: e });
  }
};
