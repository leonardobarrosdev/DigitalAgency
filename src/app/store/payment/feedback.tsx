import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { PaymentStatus } from '@/app/store/payment/components/PaymentStatus';
import { getFeedback } from '@/app/store/payment/lib/mercadopago';
import { FeedbackResponse } from '@/app/types';

export default function Feedback() {
  const router = useRouter();
  const [feedback, setFeedback] = useState<FeedbackResponse | null>(null);

  useEffect(() => {
    if (router.query.payment_id && router.query.status && router.query.merchant_order_id) {
      getFeedback(
        router.query.payment_id as string,
        router.query.status as string,
        router.query.merchant_order_id as string
      ).then(setFeedback);
    }
  }, [router.query]);

  if (!feedback) {
    return <div className="container py-4">Loading...</div>;
  }

  return (
    <div className="container py-4">
      <h1>Payment Feedback</h1>
      <PaymentStatus feedback={feedback} />
      <button 
        className="btn btn-primary mt-4"
        onClick={() => router.push('/')}
      >
        Return to Checkout
      </button>
    </div>
  );
}