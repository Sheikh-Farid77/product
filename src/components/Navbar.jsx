import CartIcon from "./svg/CartIcon";

export default function Navbar() {
    return (
        <div className="container mx-auto py-3 px-4">
            <ul className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
                {/* Logo */}
                <li className="text-2xl font-semibold text-gray-700">
                    Electronic Mart
                </li>

                {/* Search Bar */}
                <li className="w-full md:w-auto">
                    <input
                        className="w-full md:w-96 h-10 rounded-md px-4 text-sm border focus:outline-none focus:ring-2 focus:ring-violet-500"
                        placeholder="Search your product"
                        type="text"
                        aria-label="Search products"
                    />
                </li>

                {/* Cart Icon with Badge */}
                <li>
                    <div className="relative">
                        <CartIcon />
                        <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-violet-600 text-white text-xs flex items-center justify-center">
                            24
                        </span>
                    </div>
                </li>
            </ul>
        </div>

    );
}