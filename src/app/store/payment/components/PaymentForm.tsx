"use client";
import React, { useState, useEffect } from 'react';
import { PaymentPreference } from '@/app/types';
import { createPreference } from '../lib/mercadopago';

declare global {
  interface Window {
    MercadoPago: {
      new (publicKey: string, options?: { locale: string }): {
        checkout: (options: { preference: { id: string }; render: { container: string; label: string } }) => void;
      };
    };
  }
}

export function PaymentForm() {
  useEffect(() => {
    // Load MercadoPago script
    const script = document.createElement('script');
    script.src = 'https://sdk.mercadopago.com/js/v2';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = async (data: PaymentPreference) => {
    try {
      const response = await createPreference(data);
      
      const mp = new window.MercadoPago('<YOUR_PUBLIC_KEY>', {
        locale: 'en-US'
      });

      mp.checkout({
        preference: {
          id: response.id
        },
        render: {
          container: '#payment-button',
          label: 'Pay now',
        }
      });
    } catch (error) {
      console.error('Payment creation failed:', error);
    }
  };
  
  const [formData, setFormData] = useState<PaymentPreference>({
    description: '',
    price: 0,
    quantity: 1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handlePayment(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Product Description</label>
        <input
          type="text"
          className="form-control"
          id="description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="price" className="form-label">Price</label>
        <input
          type="number"
          className="form-control"
          id="price"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
          required
          min="0"
          step="0.01"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="quantity" className="form-label">Quantity</label>
        <input
          type="number"
          className="form-control"
          id="quantity"
          value={formData.quantity}
          onChange={(e) => setFormData({ ...formData, quantity: Number(e.target.value) })}
          required
          min="1"
        />
      </div>

      <button type="submit" className="btn btn-primary">Create Payment</button>
    </form>
  );
};