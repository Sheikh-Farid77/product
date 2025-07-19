import { useState } from "react";
import Portal from "./Portal";
import DetailsModal from "./DetailsModal";

export default function Product({ product }) {

    const [isOpen, setIsOpen] = useState(false)

    return ( 
        <>
        <div onClick={() => setIsOpen(true)} className="card bg-base-100 shadow-sm cursor-pointer">
            <figure>
                <img
                    src={product.thumbnail}
                    alt={product.title} />
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

        {
            isOpen && 
            <Portal>
                <DetailsModal onClose={() => setIsOpen(false)} product={product}/>
            </Portal>
        }
        </>
    );
}