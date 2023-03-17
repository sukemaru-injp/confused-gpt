namespace NodeJS {
  interface ProcessEnv {
    OPENAI_API_KEY: string; // this is the line you want
    NEXT_PUBLIC_GTM_ID: string;
    NODE_ENV: 'development' | 'production';
    PORT?: string;
    PWD?: string;
  }
}
