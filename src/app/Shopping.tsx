"use client";

import { useEffect, useMemo, useState } from "react";
import Products from "./components/Products";
import { PRODUCTS, THRESHOLD, FREE_GIFT } from "./constants";
import { CartItem, Product } from "./types";
import Cart from "./components/Cart";
import CartSummary from "./components/CartSummary";

const ShoppingCart = () => {
    const [cart, setCart] = useState<CartItem[]>([]);

    const subTotal = useMemo(() => cart.reduce((sum, item) => sum + item.price * item.quantity, 0), [cart]);
    const freeGiftAdded = subTotal >= THRESHOLD;


    useEffect(() => {
        setCart(prev => {
            const hasGift = prev.some(item => item.id === FREE_GIFT.id);

            if(freeGiftAdded && !hasGift) {
                return [...prev, {...FREE_GIFT, quantity: 1}];
            }
            if(!freeGiftAdded && hasGift) {
                return prev.filter(item => item.id !== FREE_GIFT.id);

            }
            return prev;
        })
    }, [freeGiftAdded])

    const addToCart = (product: Product) => {
        setCart((prev) => {
            const found = prev.find((item) => item.id === product.id);
            if (found) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            }
            return [...prev, { ...product, quantity: 1 }]
        })
    }

    const updateQuantity = (id: number, delta: number) => {
        setCart((prev) =>
            prev.map((item) =>
                item.id === id
                    ? { ...item, quantity: Math.max(0, item.quantity + delta) }
                    : item
            ).filter((item) => item.quantity > 0)
        )
    }




    return <div className="w-full min-h-screen p-8 ">
        <h1 className="text-2xl font-bold my-4 text-center">Shopping Cart</h1>
        <Products products={PRODUCTS} addToCart={addToCart} />
        <CartSummary subtotal={subTotal} threshold={THRESHOLD} freeGiftAdded={freeGiftAdded}/>
        <Cart cart={cart} updateQuantity={updateQuantity} />
    </div>
}

export default ShoppingCart;