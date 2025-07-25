import { Product } from "../types";
import ProductCard from "./ProductCard";

interface ProductProps {
    products: Product[];
    addToCart: (product: Product) => void;
}

const Products = ({products, addToCart}: ProductProps) => {
    return <div>
        <h1 className="text-xl font-bold">Products</h1>
        <div className="flex w-full gap-4 mt-4">
            {
                products.map((product) => (
                    <ProductCard key={product.id} product={product} addToCart={addToCart}/>
                ))
            }
        </div>
    </div>
}

export default Products;