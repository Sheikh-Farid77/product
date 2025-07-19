export default function DetailsModal({ onClose, product }) {
    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >
            <div className="relative bg-[#191D26] text-white p-6 rounded-xl w-1/2 border border-[#FEFBFB]/[36%]">
                <h2 id="modal-title" className="text-2xl font-semibold mb-4 text-center">Product Details</h2>
                <div className="flex justify-between items-center">
                    <div className="w-1/2">
                        <img src={product.thumbnail} alt="" />
                    </div>
                    <div className="w-1/2">
                        <h2 className="text-2xl font-semibold my-3">{product.title}</h2>
                        <p className="text-sm">{product.description}</p>

                    </div>
                </div>
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 bg-white text-black px-4 py-1 rounded-sm text-lg cursor-pointer"
                >
                    Close
                </button>
            </div>
        </div>
    );
}
