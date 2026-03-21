import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import OpenAI from "openai";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const MAU_JSON_PATH = path.resolve(__dirname, "maujson.txt");

/**
 * Ghi log AI response ra file maujson.txt — CHỈ trong môi trường development.
 * - Bị tắt hoàn toàn khi NODE_ENV=production (bảo vệ privacy user).
 * - Dùng fs.writeFile (async) để không chặn event loop trên request path.
 */
export function saveAIMauJson(label: string, data: unknown): void {
    if (process.env.NODE_ENV === "production") return;
    try {
        const entry = {
            timestamp: new Date().toISOString(),
            label,
            data,
        };
        fs.writeFile(MAU_JSON_PATH, JSON.stringify(entry, null, 2), "utf-8", (err) => {
            if (err) console.warn("⚠️ Failed to write maujson.txt:", err);
            else console.log(`📄 [MAU_JSON] Saved ${label} → maujson.txt`);
        });
    } catch (e) {
        console.warn("⚠️ saveAIMauJson error:", e);
    }
}

// --- Shared AI Configuration ---
const apiProxyBaseUrl = process.env.API_PROXY_BASE_URL;
const apiProxyKey = process.env.API_PROXY_KEY;
const apiProxyModel = process.env.API_PROXY_MODEL || "gemini-3-flash";

let apiKey: string | undefined;
let baseURL: string | undefined;

if (apiProxyBaseUrl && apiProxyKey) {
    console.log("🔧 Using API Proxy configuration");
    apiKey = apiProxyKey;
    baseURL = apiProxyBaseUrl;
} else if (process.env.AI_INTEGRATIONS_OPENAI_API_KEY) {
    console.log("🔧 Using Replit AI Integration");
    apiKey = process.env.AI_INTEGRATIONS_OPENAI_API_KEY;
    baseURL = process.env.AI_INTEGRATIONS_OPENAI_BASE_URL || undefined;
} else {
    console.log("🔧 Using Direct OpenAI API");
    apiKey = process.env.OPENAI_API_KEY;
    baseURL = undefined;
}

export const defaultModel = apiProxyBaseUrl && apiProxyKey
    ? apiProxyModel
    : "gpt-4o-mini";

export const openai = new OpenAI({
    apiKey,
    baseURL,
});

// Re-export OpenAI type cho index.ts dùng OpenAI.ChatCompletionMessageParam
export type { OpenAI };

// Cho biết đang dùng proxy hay không (cho model selection logic ở index.ts)
export const isUsingProxy = !!(apiProxyBaseUrl && apiProxyKey);

// Info cho /api/config endpoint
export function getAIConfigInfo(): { mode: string; details: string } {
    if (apiProxyBaseUrl && apiProxyKey) {
        return { mode: "API Proxy (Antigravity Tools)", details: `Model: ${apiProxyModel}` };
    } else if (process.env.AI_INTEGRATIONS_OPENAI_API_KEY) {
        return { mode: "Replit AI Integration", details: "Model: gpt-4o-mini" };
    }
    return { mode: "Direct OpenAI API", details: "Model: gpt-4o-mini" };
}
