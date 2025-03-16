import { PaymentPreference, PaymentResponse, FeedbackResponse } from '@/app/types';

export const createPreference = async (data: PaymentPreference): Promise<PaymentResponse> => {
  const response = await fetch('http://localhost:8080/create_preference', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const getFeedback = async (
  paymentId: string, 
  status: string, 
  merchantOrderId: string
): Promise<FeedbackResponse> => {
  const response = await fetch(
    `http://localhost:8080/feedback?payment_id=${paymentId}&status=${status}&merchant_order_id=${merchantOrderId}`
  );
  return response.json();
};