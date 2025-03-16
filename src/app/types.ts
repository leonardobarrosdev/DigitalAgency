export interface PaymentPreference {
    description: string;
    price: number;
    quantity: number;
}

export interface PaymentResponse {
    id: string;
}

export interface FeedbackResponse {
    Payment: string;
    Status: string;
    MerchantOrder: string;
}