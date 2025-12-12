import { Minus, Plus, Trash2 } from "lucide-react";

interface CartItemProps {
  img: string;
  title: string;
  price: number;
  amount: number;
}

const CartItem = ({ img, title, price, amount }: CartItemProps) => {
  return (
    <div className="rounded-lg border border-border bg-card text-card-foreground shadow-sm">
      <div className="p-6">
        <div className="flex gap-4">
          <div className="w-24 h-24 rounded bg-muted overflow-hidden shrink-0">
            <img src={img} alt={title} className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-lg">{title}</h3>
              <p className="text-primary font-bold mt-1">${price}</p>
            </div>
            <div className="flex items-center justify-between flex-wrap gap-2 mt-4">
              <div className="flex items-center flex-wrap gap-2">
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10"
                >
                  <Minus size={16} />
                </button>
                <span className="flex h-10 items-center justify-center rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm w-16 text-center">
                  {amount}
                </span>
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10"
                >
                  <Plus size={16} />
                </button>
              </div>
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-destructive text-destructive-foreground hover:bg-destructive/90 h-10 w-10"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
