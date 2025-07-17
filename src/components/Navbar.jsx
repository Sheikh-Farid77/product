import CartIcon from "./svg/CartIcon";

export default function Navbar() {
    return (
        <div className="container mx-auto py-3">
            <ul className="flex items-center justify-between">
                <li className="text-2xl font-semibold text-gray-700">Electronic Mart</li>
                <li>
                    <input className="border w-96 h-8 rounded-sm text-center p-2" placeholder="Search Your Product" type="text" name="" id="" />
                </li>
                <li>
                   <div className="relative">
                     <CartIcon />
                     <span className="absolute h-7 w-7 rounded-full bg-violet-600 -top-2 right-0 text-center text-white text-sm">24</span>
                   </div>
                   
                </li>
            </ul>

        </div>
    );
}