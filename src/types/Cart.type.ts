export interface CartItem{
    id:string,
    product_id:string,
    cart_id:string,
    quantity:number
}

export interface Cart{
    id:string,
    user_id:string,
    status:"open" | "checkedout" | "cancelled" | "pending"
}

