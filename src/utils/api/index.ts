import axios, { AxiosResponse } from 'axios';
import { CreateIntroduceRequest, GenerateResult } from '@/model/CreateIntroduce';
const client = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

export const generateIntroduce = (req: CreateIntroduceRequest) =>
  client.post<CreateIntroduceRequest, AxiosResponse<GenerateResult>>('/api/generate', req);
