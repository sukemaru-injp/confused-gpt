export const jobOptions = [
  { label: '総務', value: 'general' },
  { label: '人事・労務', value: 'hr' },
  { label: '会計・経理', value: 'accounting' },
  { label: 'マーケティング', value: 'marketing' },
  { label: 'データサイエンス', value: 'data_science' },
  { label: 'デザイナー', value: 'designer' },
  { label: '営業', value: 'sales' },
  { label: 'カスタマーサポート', value: 'customer_support' },
  { label: '販売員', value: 'sales_staff' },
  { label: 'システムエンジニア', value: 'engineer' },
  { label: 'プロジェクトマネージャー', value: 'manager' },
  { label: 'コンサルタント', value: 'consultant' }
] as const

export const jobs = {
  general: '総務',
  hr: '人事・労務',
  accounting: '会計・経理',
  marketing: 'マーケティング',
  data_science: 'データサイエンス',
  designer: 'デザイナー',
  sales: '営業',
  customer_support: 'カスタマーサポート',
  sales_staff: '販売員',
  engineer: 'システムエンジニア',
  manager: 'プロジェクトマネージャー',
  consultant: 'コンサルタント'
} as const

export type JobType = keyof typeof jobs

export function isJobType(input: string): input is JobType {
  return Object.keys(jobs).some((k) => k === input);
}

export const getJobsLabel = (input: JobType) => {
  return jobs[input];
};

export type GenerateRequest = {
  job: JobType;
  mock: boolean;
}

export type GenerateResult = {
  data: {
    text: string | null;
  };
};

