import OpenAI from 'openai';
import fs from 'fs';

// Đang gọi qua tên miền Public để kiểm tra lại theo yêu cầu của bạn
const openai = new OpenAI({
    baseURL: 'https://api.intekaih.id.vn/v1',
    apiKey: 'sk-92576e86b4664be298fb3c19e644756f',
});

async function main() {
    console.log("Đang gọi API tạo ảnh qua public URL https://api.intekaih.id.vn/v1...");
    try {
        const response = await openai.images.generate({
            model: 'gemini-3.1-flash-image',
            prompt: 'A cute cat sitting on a laptop, highly detailed, 4k',
            n: 1,
            size: '1024x1024',
        });
        fs.writeFileSync('test-result.json', JSON.stringify(response, null, 2));
        console.log("✅ Thành công! Đã ghi kết quả vào test-result.json");
        if (response.data[0].url) {
            console.log("URL ảnh mởi tạo: ", response.data[0].url);
        } else if (response.data[0].b64_json) {
            console.log("Dữ liệu Base64 nhận được (đã ghi vào file json).");
        }
    } catch (error: any) {
        fs.writeFileSync('test-error.json', JSON.stringify({
            status: error.response?.status,
            data: error.response?.data,
            message: error.message
        }, null, 2));
        console.log("❌ Lỗi! Đã ghi chi tiết vào test-error.json");
        if (error.response) {
            console.error(error.response.status, error.response.data);
        } else {
            console.error(error.message);
        }
    }
}

main();
