import { useState } from "react";
import type { authTypes, CartItem } from "../../types"
import { Button, Input, Label, Loader, Textarea } from "../ui"
import toast from "react-hot-toast";
import handleCheckout from "./handleCheckout";

interface ShippingFormProps {
  items:CartItem[] | null;
  user:authTypes.UserInfoI|null;
}

const ShippingForm = ({user,items}:ShippingFormProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const products = items?.map((item) => ({
    name: item.products.title,
    quantity: item.quantity,
    price: item.products.price,
    description: item.products.description,
  }));
  const handlePlaceOrder = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsLoading(true);
    try{
      // console.log("products",products);
     await handleCheckout(items,user,products);
    }catch(err){
      console.log(err);
      toast.error((err as Error).message);
    }finally{
      setIsLoading(false);
    }
  }
  return (
    <>
    {isLoading && <Loader />}
    <form onSubmit={handlePlaceOrder} className="space-y-4">
          <div className="space-y-2">
            <Label
              htmlFor="name"
            >
              Full Name
            </Label>
            <Input
              type="text"
              id="name"
              name="name"
              disabled={true}
              value={user?.fullname ? user.fullname : ""}
            />
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="address"
            >
              Shipping Address *
            </Label>
            <Textarea
              name="address"
              id="address"
              required
              rows={4}
              placeholder="Enter your complete shipping address"
            >
              {user?.address ? user.address : ""}
            </Textarea>
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="phone"
            >
              Phone Number
            </Label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              disabled={true}
              value={user?.phone ? user.phone : ""}
            />
          </div>
          <Button>Place Order</Button>
        </form>
        </>
  )
}

export default ShippingForm