


interface CartSummaryProps {
    subtotal: number;
    threshold: number;
    freeGiftAdded: boolean;
}


const CartSummary = ({ subtotal, threshold, freeGiftAdded }: CartSummaryProps) => {
    return <div className="w-full my-4">
        <h2 className="text-xl font-bold">Cart Summary</h2>

        <div className="w-full bg-white rounded p-4 mt-4">
            <div className="w-full flex items-center justify-between border-b-[1px] p-2">
                <span>SubTotal: </span>
                <span>₹{subtotal}</span>
            </div>


            <div className="w-full bg-blue-500/10 flex flex-col gap-2 rounded p-4 my-4">
                {
                    freeGiftAdded ? (
                        <div>
                            You got a free wireless mouse
                        </div>

                    ) : (
                        <>
                            <div>
                                Add {threshold - subtotal} more to get a free wireless mouse
                            </div>
                            <div className="w-full h-[20px] bg-gray-500/20 rounded-lg relative overflow-hidden">
                                <div className="h-[20px] bg-blue-500" style={{
                                    width: `${subtotal / threshold * 100}%`
                                }}></div>
                            </div>
                        </>
                    )
                }

            </div>
        </div>
    </div>
}

export default CartSummary;