export interface AIModel {
  id: string;
  name: string;
  description: string;
  maxTokens: number;
}

/** Base URL của Backend (server) - BE proxy qua Antigravity Tools, FE chỉ gọi BE */
export const AI_CONFIG = {
  baseUrl: 'http://127.0.0.1:3002',
  apiKey: '', // BE tự xử lý API key với Antigravity Tools
  models: [
    {
      id: 'gemini-3.1-pro-high',
      name: 'Gemini 3.1 Pro High',
      description: 'High performance model for complex tasks',
      maxTokens: 8192
    },
    {
      id: 'gemini-3-flash',
      name: 'Gemini 3 Flash',
      description: 'Fast model for quick responses',
      maxTokens: 4096
    }
  ] as AIModel[],
  defaultModel: 'gemini-3-flash',
  temperature: 0.7,
  maxTokens: 2048
};

export const OPENAI_API_CONFIG = {
  baseURL: AI_CONFIG.baseUrl,
  apiKey: AI_CONFIG.apiKey,
  defaultHeaders: {
    'Content-Type': 'application/json'
  }
};
