import { Product } from "../types";

interface ProductCardProps {
    product: Product;
    addToCart: (product: Product) => void;
}

const ProductCard = ({product, addToCart}: ProductCardProps ) => {
    return <div className="bg-white rounded p-2 flex flex-col gap-3 w-full">
        <h2>{product.name}</h2>
        <span>₹{product.price}</span>
        <button className="bg-blue-500 text-white py-2 rounded" onClick={() => addToCart(product)}>Add to cart</button>
    </div>

}

export default ProductCard;