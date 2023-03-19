import { ZodiacType } from './Zodiac';

export type FortuneRequest = {
  zodiac: ZodiacType;
  mock: boolean;
};

export type FortuneResult = {
  data: {
    text: string | null;
  };
};
