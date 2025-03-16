import React from 'react';
import { FeedbackResponse } from '@/app/types';

interface PaymentStatusProps {
  feedback: FeedbackResponse;
}

export const PaymentStatus: React.FC<PaymentStatusProps> = ({ feedback }) => {
  return (
    <div className="card mt-4">
      <div className="card-body">
        <h5 className="card-title">Payment Status</h5>
        <p className="card-text">Payment ID: {feedback.Payment}</p>
        <p className="card-text">Status: {feedback.Status}</p>
        <p className="card-text">Merchant Order ID: {feedback.MerchantOrder}</p>
      </div>
    </div>
  );
};