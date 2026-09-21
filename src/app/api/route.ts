import { NextResponse } from 'next/server';

/**
 * API 根入口
 * 后续在此目录下新建：
 *   - /api/stripe/webhook  Stripe 支付回调
 *   - /api/contact         联系表单接收
 *   - /api/feedback        意见反馈表单
 */
export async function GET() {
  return NextResponse.json({
    name: '悦读成语 API',
    status: 'ok',
    endpoints: [
      '/api/stripe/webhook (待建)',
      '/api/contact (待建)',
      '/api/feedback (待建)',
    ],
  });
}
