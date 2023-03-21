import axios, { AxiosResponse } from 'axios';
import { Hello } from '@/model';
import { GenerateRequest, GenerateResult } from '@/model/JobModel';
const client = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getHello = (req: { req: string }) =>
  client.post<{ req: string }, AxiosResponse<Hello>>('/api/hello', req);

export const generateInterview = (req: GenerateRequest) => client.post<GenerateRequest, AxiosResponse<GenerateResult>>('/api/generate', req)