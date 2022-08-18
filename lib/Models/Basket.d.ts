export interface Basket {
    sku: string;
    sellerSpecificId?: string;
    description: string;
    type?: string;
    quantity: number;
    unitPrice: number;
    total: number;
}
