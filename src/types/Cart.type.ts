import type { Product } from "./product.type"

export interface CartItem{
    id:string,
    product_id:string,
    cart_id:string,
    quantity:number
    products:Product
}

export interface Cart{
    id:string,
    user_id:string,
    status:"open" | "checkedout" | "cancelled" | "pending"
}

