import express from 'express';
import cors from 'cors';
import OpenAI from 'openai';

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

const openai = new OpenAI({
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY,
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,
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
- Nếu được hỏi về địa điểm, cung cấp địa chỉ và mô tả ngắn`;

app.post('/api/chat', async (req, res) => {
  try {
    const { message, history = [] } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const messages: OpenAI.ChatCompletionMessageParam[] = [
      { role: 'system', content: DALAT_SYSTEM_PROMPT },
      ...history.map((m: { role: string; content: string }) => ({
        role: m.role as 'user' | 'assistant',
        content: m.content,
      })),
      { role: 'user', content: message },
    ];

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages,
      max_completion_tokens: 1024,
    });

    const reply = response.choices[0]?.message?.content || 'Xin lỗi, tôi không thể trả lời lúc này.';

    res.json({ reply });
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
