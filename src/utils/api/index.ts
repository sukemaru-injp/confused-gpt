import axios from "axios";
import { Hello } from "@/model";

const client = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 8000,
})

export const getHello = () => client.get<Hello>('/api/hello')
