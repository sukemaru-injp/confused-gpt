import { generateInterview } from './../api/index';
import { AdapterType } from '.';
import { ok, err } from 'neverthrow';
import { GenerateRequest, GenerateResult } from '@/model/JobModel';

export type InterviewAdapter = AdapterType<GenerateResult>;

export const generateInterviewAdapter = async (req: GenerateRequest): Promise<InterviewAdapter> => {
  try {
    const { data } = await generateInterview(req);
    return ok(data);
  } catch (e: unknown) {
    return err({ name: 'error' as const, error: e });
  }
};
