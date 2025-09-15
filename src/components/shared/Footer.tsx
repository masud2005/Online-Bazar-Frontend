import {
    FaApple,
    FaCcApplePay,
    FaCcVisa,
    FaFacebookF,
    FaGooglePlay,
    FaInstagram,
    FaLock,
    FaPinterestP,
    FaTwitter,
} from "react-icons/fa";
import footerBg from "../../assets/footer/FooterBg.png";
import footerLogo from "../../assets/footer/footerLogo.png";
import masterCardLogo from "../../assets/footer/Mastercard.png";

export default function Footer() {
    return (
        <footer
            className="w-full bg-[#111111] text-gray-300  relative overflow-hidden"
            style={{
                backgroundImage: `url(${footerBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Main Footer */}
            <div className="container mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 relative z-10">
                {/* Logo + About */}
                <div className="md:col-span-1">
                    <h2 className="flex items-center gap-2 text-white text-2xl font-bold mb-4">
                        <img src={footerLogo} alt="Logo" className="h-8 w-8" />
                        Ecobazar
                    </h2>
                    <p className="text-sm leading-relaxed mb-6">
                        Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
                        dui, eget bibendum magn.
                    </p>
                    {/* Social Icons */}
                    <div className="flex items-center gap-4 text-lg text-white">
                        <a
                            href="#"
                            className="bg-green-600 p-2 rounded-full hover:bg-green-700"
                        >
                            <FaFacebookF />
                        </a>
                        <a href="#" className="hover:text-green-500">
                            <FaTwitter />
                        </a>
                        <a href="#" className="hover:text-green-500">
                            <FaPinterestP />
                        </a>
                        <a href="#" className="hover:text-green-500">
                            <FaInstagram />
                        </a>
                    </div>
                </div>

                {/* My Account + Helps */}
                <div className="flex flex-row gap-3 sm:col-span-2 md:col-span-2">
                    {/* My Account */}
                    <div className="flex-1">
                        <h3 className="text-white font-semibold mb-4 inline-block border-b-2 border-green-500 pb-1">
                            My Account
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#">My Account</a></li>
                            <li><a href="#">Order History</a></li>
                            <li><a href="#">Shopping Cart</a></li>
                            <li><a href="#">Wishlist</a></li>
                        </ul>
                    </div>

                    {/* Helps */}
                    <div className="flex-1">
                        <h3 className="text-white font-semibold mb-4 inline-block border-b-2 border-green-500 pb-1">
                            Helps
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#">Terms & Condition</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>

                {/* only mobile device */}
                <div className="grid grid-cols-2 gap-3 md:hidden">
                    {/* Proxy */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 inline-block border-b-2 border-green-500 pb-1">
                            Proxy
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Shop</a></li>
                            <li><a href="#">Product</a></li>
                            <li><a href="#">Track Order</a></li>
                        </ul>
                    </div>

                    {/* ==== Right Section (App Download) ==== */}
                    <div className="w-full">
                        <h3 className="text-white  font-semibold mb-4 inline-block border-b-2 border-green-500 pb-1">
                            Download Mobile App
                        </h3>
                        <div className="space-y-2">
                            {/* App Store */}
                            <div className="flex items-center gap-2 bg-gray-600 p-2 rounded-md w-full sm:w-auto">
                                <FaApple className="text-2xl text-white" />
                                <div>
                                    <span className="text-xs text-gray-300">Download on the</span>
                                    <h2 className="text-sm text-white font-bold">App Store</h2>
                                </div>
                            </div>

                            {/* Google Play */}
                            <div className="flex items-center gap-2 bg-gray-600 p-2 rounded-md w-full sm:w-auto">
                                <FaGooglePlay className="text-2xl text-white" />
                                <div>
                                    <span className="text-xs text-gray-300">Download on the</span>
                                    <h2 className="text-sm text-white font-bold">Google Play</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Proxy */}
                <div className="hidden md:block">
                    <h3 className="text-white font-semibold mb-4 inline-block border-b-2 border-green-500 pb-1">
                        Proxy
                    </h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#">About</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">Product</a></li>
                        <li><a href="#">Track Order</a></li>
                    </ul>
                </div>

                {/* ==== Right Section (App Download) ==== */}
                <div className="w-full hidden md:block">
                    <h3 className="text-white  font-semibold mb-4 inline-block border-b-2 border-green-500 pb-1">
                        Download Mobile App
                    </h3>
                    <div className="space-y-2">
                        {/* App Store */}
                        <div className="flex items-center gap-2 bg-gray-600 p-2 rounded-md w-full sm:w-auto">
                            <FaApple className="text-2xl text-white" />
                            <div>
                                <span className="text-xs text-gray-300">Download on the</span>
                                <h2 className="text-sm text-white font-bold">App Store</h2>
                            </div>
                        </div>

                        {/* Google Play */}
                        <div className="flex items-center gap-2 bg-gray-600 p-2 rounded-md w-full sm:w-auto">
                            <FaGooglePlay className="text-2xl text-white" />
                            <div>
                                <span className="text-xs text-gray-300">Download on the</span>
                                <h2 className="text-sm text-white font-bold">Google Play</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700  px-6 py-4 relative z-10">
                <div className="container  mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    {/* Copyright */}
                    <p className="text-sm text-gray-400 text-center md:text-left w-full md:w-auto">
                        Ecobazar eCommerce © 2021. All Rights Reserved
                    </p>

                    {/* Payment Icons */}
                    <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-3 w-full md:w-auto justify-center">
                        <div className="flex items-center gap-2">
                            <FaCcApplePay className="text-2xl" />
                            <FaCcVisa className="text-2xl" />
                            <img src={masterCardLogo} alt="Mastercard" className="h-6 w-auto" />
                        </div>

                        {/* Secure Payment */}
                        <div className="flex items-center gap-1 border border-gray-400 rounded px-2 py-1 text-xs bg-gray-800 mt-2 sm:mt-0">
                            <FaLock className="text-green-500 text-sm" />
                            <span className="font-medium text-gray-200">Secure Payment</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}



