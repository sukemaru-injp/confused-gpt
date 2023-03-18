export const zodiacOptions = [
  { label: 'おひつじ座', value: 'aries' },
  { label: 'おうし座', value: 'taurus' },
  { label: 'ふたご座', value: 'gemini' },
  { label: 'かに座', value: 'cancer' },
  { label: 'しし座', value: 'leo' },
  { label: 'おとめ座', value: 'virgo' },
  { label: 'てんびん座', value: 'libra' },
  { label: 'さそり座', value: 'scorpio' },
  { label: 'いて座', value: 'sagittarius' },
  { label: 'やぎ座', value: 'capricorn' },
  { label: 'みずがめ座', value: 'aquarius' },
  { label: 'うお座', value: 'pisces' },
] as const;

export const zodiac = {
  aries: 'おひつじ座',
  taurus: 'おうし座',
  gemini: 'ふたご座',
  cancer: 'かに座',
  leo: 'しし座',
  virgo: 'おとめ座',
  libra: 'てんびん座',
  scorpio: 'さそり座',
  sagittarius: 'いて座',
  capricorn: 'やぎ座',
  aquarius: 'みずがめ座',
  pisces: 'うお座',
} as const;

export type ZodiacType = keyof typeof zodiac;

export function isZodiacType(input: string): input is ZodiacType {
  return Object.keys(zodiac).some((k) => k === input);
}

export const getZodiacLabel = (input: ZodiacType) => {
  return zodiac[input];
};
