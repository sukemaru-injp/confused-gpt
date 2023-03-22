import { GenderType } from './Gender';

export type CreateIntroduceRequest = {
  value: {
    gender: GenderType;
    age: number;
    likes: Likes
  };
  mock: boolean;
};

export type GenerateResult = {
  data: {
    text: string | null;
  };
};

export type Likes = readonly { id: string; value: string; }[]
