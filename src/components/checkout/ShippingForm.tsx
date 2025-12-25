import { Button, Input, Label, Textarea } from "../ui"



const ShippingForm = () => {
  return (
    <form className="space-y-4">
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
              value="John Doe"
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
              Cairo, Egypt
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
              value="01204811102"
            />
          </div>
          <Button>Place Order</Button>
        </form>
  )
}

export default ShippingForm