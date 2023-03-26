export const genderOptions = [
  { label: '男性', value: 'man' },
  { label: '女性', value: 'woman' },
] as const;

export const gender = {
  man: '男性',
  woman: '女性',
} as const;

export type GenderType = keyof typeof gender;

export function isGender(input: string): input is GenderType {
  return Object.keys(gender).some((k) => k === input);
}

export const getGenderLabel = (input: GenderType) => {
  return gender[input];
};
