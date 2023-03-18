import { ZodiacType } from './Zodiac';

export type FortuneRequest = {
  zodiac: ZodiacType;
};

export type FortuneResult = {
  data: unknown;
};
