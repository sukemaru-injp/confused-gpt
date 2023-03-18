import axios from 'axios';
import { Hello } from '@/model';

const client = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 8000,
});

export const getHello = (req: { req: string }) => client.post<{ req: string }, Hello>('/api/hello', req)
