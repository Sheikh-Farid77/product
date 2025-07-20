import { useProduct } from "../provider/ProductProvider";
import Product from "./Product";

export default function ProductList() {
    const { products, isLoading, error, handleNext, handlePrev, skip, item } = useProduct();
    
  

    if (isLoading) return <div className="text-center text-lg mt-10">Fetching products...</div>;
    if (error) return <div className="text-center text-red-500 mt-10">Failed to load products. Please try again.</div>;

    const safeProducts = Array.isArray(products) ? products : [];

    if (safeProducts.length === 0) return <div className="text-center mt-10 text-gray-500">No products available.</div>;

    return (
        <div className="container mx-auto my-10 py-3">
            <h1 className="text-center text-3xl font-semibold">Product List</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                {safeProducts.map(product => (
                    <Product key={product.id} product={product} />
                ))}
            </div>

            <div className="flex justify-center items-center gap-10 my-10">
                <button disabled={skip <= 0} onClick={handlePrev} className="btn btn-success">Prev</button>
                <button disabled={skip >= item - 20} onClick={handleNext} className="btn btn-success">Next</button>
            </div>
        </div>

    );
}
