import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import OpenAI from 'openai';

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

// Support both Replit AI integration and standard OpenAI API key for local development
const apiKey = process.env.AI_INTEGRATIONS_OPENAI_API_KEY || process.env.OPENAI_API_KEY;
const baseURL = process.env.AI_INTEGRATIONS_OPENAI_BASE_URL || undefined;

if (!apiKey) {
  console.error('WARNING: No OpenAI API key found!');
  console.error('Please set OPENAI_API_KEY environment variable for local development.');
}

const openai = new OpenAI({
  apiKey: apiKey,
  baseURL: baseURL,
});

const DALAT_SYSTEM_PROMPT = `Bạn là chatbot tư vấn du lịch Đà Lạt - thành phố ngàn hoa. Bạn có kiến thức sâu rộng về:
- Địa điểm du lịch nổi tiếng: Hồ Xuân Hương, Thung Lũng Tình Yêu, Langbiang, Đồi Chè Cầu Đất, Crazy House, Dinh Bảo Đại
- Ẩm thực đặc sản: Bánh tráng nướng, bánh mì xíu mại, lẩu gà lá é, kem bơ, dâu tây
- Cà phê Đà Lạt: Quán Cối Xay Gió, các quán cà phê view đẹp
- Lịch sử và văn hóa địa phương
- Thời tiết và mùa đẹp nhất để tham quan
- Gợi ý lịch trình du lịch 1-3 ngày

Quy tắc trả lời:
- Trả lời ngắn gọn, thân thiện và hữu ích
- Sử dụng emoji phù hợp để tạo không khí vui vẻ
- Có thể dùng markdown để in đậm tên địa điểm quan trọng
- Nếu được hỏi về địa điểm, cung cấp địa chỉ và mô tả ngắn
- Khi gợi ý địa điểm cụ thể, CHỈ gợi ý 1 địa điểm nổi bật nhất, không liệt kê nhiều địa điểm
- Nếu người dùng gửi ảnh, hãy phân tích ảnh để nhận diện địa điểm ở Đà Lạt và cung cấp thông tin chi tiết về địa điểm đó`;

const PLACE_EXTRACT_PROMPT = `Dựa vào cuộc trò chuyện, nếu có gợi ý địa điểm cụ thể, hãy trả về JSON với thông tin địa điểm quan trọng nhất.
Chỉ trả về JSON theo format:
{"name": "Tên địa điểm chính xác (ví dụ: Đại học Đà Lạt, Hồ Xuân Hương, Thác Datanla)", "address": "Địa chỉ cụ thể nếu biết", "description": "Mô tả ngắn"}
QUAN TRỌNG: Trường "name" phải là tên chính xác của địa điểm để có thể tìm trên Google Maps.
Nếu không có địa điểm cụ thể nào được gợi ý, trả về: null
Chỉ trả JSON, không có text khác.`;

app.post('/api/chat', async (req, res) => {
  try {
    const { message, history = [], imageBase64 } = req.body;

    if (!message && !imageBase64) {
      return res.status(400).json({ error: 'Message or image is required' });
    }

    const historyMessages: OpenAI.ChatCompletionMessageParam[] = history.map((m: { role: string; content: string }) => ({
      role: m.role as 'user' | 'assistant',
      content: m.content,
    }));

    let userContent: OpenAI.ChatCompletionContentPart[] = [];
    
    if (message) {
      userContent.push({ type: 'text', text: message });
    }
    
    if (imageBase64) {
      userContent.push({
        type: 'image_url',
        image_url: {
          url: `data:image/jpeg;base64,${imageBase64}`,
          detail: 'low'
        }
      });
      if (!message) {
        userContent.unshift({ type: 'text', text: 'Đây là ảnh tôi chụp. Bạn có thể cho tôi biết đây là địa điểm nào ở Đà Lạt không?' });
      }
    }

    const messages: OpenAI.ChatCompletionMessageParam[] = [
      { role: 'system', content: DALAT_SYSTEM_PROMPT },
      ...historyMessages,
      { role: 'user', content: userContent.length === 1 && userContent[0].type === 'text' ? (userContent[0] as any).text : userContent },
    ];

    const modelToUse = imageBase64 ? 'gpt-4o' : 'gpt-4o-mini';
    
    const response = await openai.chat.completions.create({
      model: modelToUse,
      messages,
      max_completion_tokens: 1024,
    });

    const reply = response.choices[0]?.message?.content || 'Xin lỗi, tôi không thể trả lời lúc này.';

    let suggestedPlace = null;
    try {
      const extractResponse = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: PLACE_EXTRACT_PROMPT },
          { role: 'user', content: `Câu hỏi: ${message}\nTrả lời: ${reply}` }
        ],
        max_completion_tokens: 256,
      });
      
      const extractedText = extractResponse.choices[0]?.message?.content?.trim();
      if (extractedText && extractedText !== 'null') {
        suggestedPlace = JSON.parse(extractedText);
      }
    } catch (e) {
      console.log('Place extraction skipped');
    }

    res.json({ reply, suggestedPlace });
  } catch (error) {
    console.error('OpenAI API error:', error);
    res.status(500).json({ error: 'Failed to get AI response' });
  }
});

app.post('/api/chat/stream', async (req, res) => {
  try {
    const { message, history = [] } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    const messages: OpenAI.ChatCompletionMessageParam[] = [
      { role: 'system', content: DALAT_SYSTEM_PROMPT },
      ...history.map((m: { role: string; content: string }) => ({
        role: m.role as 'user' | 'assistant',
        content: m.content,
      })),
      { role: 'user', content: message },
    ];

    const stream = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages,
      max_completion_tokens: 1024,
      stream: true,
    });

    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content || '';
      if (content) {
        res.write(`data: ${JSON.stringify({ content })}\n\n`);
      }
    }

    res.write(`data: ${JSON.stringify({ done: true })}\n\n`);
    res.end();
  } catch (error) {
    console.error('OpenAI streaming error:', error);
    res.write(`data: ${JSON.stringify({ error: 'Failed to stream response' })}\n\n`);
    res.end();
  }
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

const PORT = 3001;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`AI Chat API server running on port ${PORT}`);
});
