export interface Product {
    id?: string;
    title: string;
    description?: string;
    price: number;
    image: string | File | null;
    brand?: string;
    category: string;
    stock: number;
    vendor_id?: string;
}

