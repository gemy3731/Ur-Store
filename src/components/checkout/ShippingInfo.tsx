import { useAuth } from "../../context/Auth.context";
import ShippingForm from "./ShippingForm";


const ShippingInfo = () => {
  const {state} = useAuth();
  return (
    <div className="rounded-lg border border-border bg-card text-card-foreground shadow-sm">
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="text-2xl font-semibold leading-none tracking-tight">
          Shipping Information
        </h3>
      </div>
      <div className="p-6 pt-0">
        <ShippingForm user={state.user} />
      </div>
    </div>
  );
};

export default ShippingInfo;
