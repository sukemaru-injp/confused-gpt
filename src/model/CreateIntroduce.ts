import { GenderType } from "./Gender";

export type CreateIntroduceRequest = {
  value: { 
    gender: GenderType
  },
  mock: boolean;
};

export type GenerateResult = {
  data: {
    text: string | null;
  };
};
