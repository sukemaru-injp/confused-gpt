import axios, { AxiosResponse } from 'axios';
import { Hello } from '@/model';
import { FortuneRequest, FortuneResult } from '@/model/FortuneModel';
const client = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getHello = (req: { req: string }) =>
  client.post<{ req: string }, AxiosResponse<Hello>>('/api/hello', req);

export const generateFortune = (req: FortuneRequest) =>
  client.post<FortuneRequest, AxiosResponse<FortuneResult>>('/api/generate', req);
