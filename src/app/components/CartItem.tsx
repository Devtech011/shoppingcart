
import { CartItem as CartType } from "../types";
interface CartItemProps {
    item: CartType;
    updateQuantity: (id: number, delta: number) => void;
}


const CartItem = ({ item, updateQuantity }: CartItemProps) => {
    const isFree = item.price === 0;
    return <div className="w-full bg-white rounded p-4 flex justify-between items-center mt-2">
        <div className="flex flex-col gap2">
            <div>{item.name}</div>
            <div>₹{item.price} x {item.quantity} = ₹{item.price * item.quantity}</div>
        </div>

        {
            isFree ? (
                <div className="bg-green-500/20 text-lg px-4 rounded-2xl">
                    FREE GIFT
                </div>
            ) : (
                <div className="flex gap-4 items-center">
                    <button className="bg-red-500 text-white text-xl h-10 w-10 rounded" onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button className="bg-green-500 text-white text-xl h-10 w-10 rounded" onClick={() => updateQuantity(item.id, 1)}>+</button>
                </div>
            )
        }




    </div>
}

export default CartItem;