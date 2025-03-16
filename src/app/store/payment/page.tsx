
import { PaymentForm } from '@/app/store/payment/components/PaymentForm';
import Head from 'next/head';


export default function Payment() {
  return (
    <div className="container">
      <Head>
        <title>MercadoPago Checkout</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="py-4">
        <h1 className="mb-4">MercadoPago Checkout</h1>
        <PaymentForm />
        <div id="payment-button" className="mt-4"></div>
      </main>
    </div>
  );
}