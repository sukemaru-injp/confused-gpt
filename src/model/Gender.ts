export const genderOptions = [
  { label: '男性', value: 'man' },
  { label: '女性', value: 'woman' },
  { label: '指定しない', value: 'none' },
] as const;

const gender = {
  man: '男性',
  woman: '女性',
  none: '指定しない',
} as const;

export type GenderType = keyof typeof gender;

export function isJobType(input: string): input is GenderType {
  return Object.keys(gender).some((k) => k === input);
}

export const getJobsLabel = (input: GenderType) => {
  return gender[input];
};
