import { GenderType, isGender } from './Gender';

export type CreateIntroduceRequest = {
  value: {
    gender: GenderType;
    age: number;
    likes: Likes;
  };
  mock: boolean;
};

export type GenerateResult = {
  data: {
    text: string | null;
  };
};

export type Likes = readonly { id: string; value: string }[];

const isLikes = (input: any): input is Likes => {
  if (!Array.isArray(input)) {
    return false;
  }

  if (input.some((v) => typeof v.id !== 'string' || typeof v.value !== 'string')) {
    return false;
  }

  return true;
};

export const isCreateIntroduceRequestValue = (
  input: any,
): input is CreateIntroduceRequest['value'] => {
  if (!isGender(input?.gender) || typeof input?.age !== 'number' || !isLikes(input.likes)) {
    return false;
  }

  return true;
};
