export default function Product({ product }) {

    return (
        <div className="card bg-base-100 shadow-sm">
            <figure>
                <img
                    src={product.thumbnail}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product.title}</h2>
                <p></p>
                <div className="card-actions justify-end">
                    <p className="font-semibold">{product.price} $</p>
                    <button className="btn btn-primary">Add To Cart</button>
                </div>
            </div>
            <button className="btn btn-error text-lg my-3">Delete</button>
        </div>
    );
}