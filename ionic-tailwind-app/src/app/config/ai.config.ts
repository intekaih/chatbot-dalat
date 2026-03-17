import { environment } from "../../environments/environment";

export interface AIModel {
  id: string;
  name: string;
  description: string;
  maxTokens: number;
}

/** Base URL của Backend (server) - đọc từ environment để hỗ trợ đa môi trường
 *  Dev:  environment.ts  → http://127.0.0.1:3001
 *  Prod: environment.prod.ts → giá trị từ window.__API_BASE_URL__ hoặc cùng origin
 */
export const AI_CONFIG = {
  baseUrl: environment.apiBaseUrl,
  apiKey: "", // BE tự xử lý API key
  models: [
    {
      id: "gemini-3.1-pro-high",
      name: "Gemini 3.1 Pro High",
      description: "High performance model for complex tasks",
      maxTokens: 8192,
    },
    {
      id: "gemini-3-flash",
      name: "Gemini 3 Flash",
      description: "Fast model for quick responses",
      maxTokens: 4096,
    },
  ] as AIModel[],
  defaultModel: "gemini-3-flash",
  temperature: 0.7,
  maxTokens: 2048,
};

export const OPENAI_API_CONFIG = {
  baseURL: AI_CONFIG.baseUrl,
  apiKey: AI_CONFIG.apiKey,
  defaultHeaders: {
    "Content-Type": "application/json",
  },
};
