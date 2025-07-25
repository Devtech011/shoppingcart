import { CartItem as CartTypes } from "../types";
import CartItem from "./CartItem";

interface CartProps {
    cart: CartTypes[];
    updateQuantity: (id: number, delta: number) => void;
    
}

const Cart = ({cart, updateQuantity}: CartProps) => {
    return <div className="w-full my-2">
        <h2 className="text-xl font-bold">Cart Items</h2>

        <div className="flex flex-col gap-2 mt-2">
            {
                cart.length === 0 && (
                    <div className="w-full flex flex-col gap-2 items-center p-4 bg-white rounded">
                        <div>Your Cart is empty</div>
                        <div>Add some products to see them here</div>
                    </div>
                )
            }
            {
                cart.length !== 0 && cart.map((item) => (
                    <CartItem item={item} updateQuantity={updateQuantity}/>
                ))
            }
        </div>
    </div>
}

export default Cart;