import { generateIntroduce } from './../api/index';
import { AdapterType } from '.';
import { ok, err } from 'neverthrow';
import { CreateIntroduceRequest, GenerateResult } from '@/model/CreateIntroduce';

export type InterviewAdapter = AdapterType<GenerateResult>;

export const generateIntroduceAdapter = async (
  req: CreateIntroduceRequest,
): Promise<InterviewAdapter> => {
  try {
    const { data } = await generateIntroduce(req);
    return ok(data);
  } catch (e: unknown) {
    return err({ name: 'error' as const, error: e });
  }
};
