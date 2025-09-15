import { AiOutlineShopping } from "react-icons/ai";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { GoSearch } from "react-icons/go";
import { Link, NavLink } from "react-router-dom";
import TopBar from "./TopBar";
import NavLogo from "../../assets/navLogo/plant.png"

const Navbar = () => {
    const links = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `hover:text-green-600 transition duration-300 ease-in-out text-base px-2 py-1 ${isActive
                            ? "text-green-600 font-semibold border-b-2 border-green-600 rounded"
                            : "text-gray-700"
                        }`
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/shop"
                    className={({ isActive }) =>
                        `hover:text-green-600 transition duration-300 ease-in-out text-base px-2 py-1 ${isActive
                            ? "text-green-600 font-semibold border-b-2 border-green-600 rounded"
                            : "text-gray-700"
                        }`
                    }
                >
                    Shop
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/Blog"
                    className={({ isActive }) =>
                        `hover:text-green-600 transition duration-300 ease-in-out text-base px-2 py-1 ${isActive
                            ? "text-green-600 font-semibold border-b-2 border-green-600 rounded"
                            : "text-gray-700"
                        }`
                    }
                >
                    Blog
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        `hover:text-green-600 transition duration-300 ease-in-out text-base px-2 py-1 ${isActive
                            ? "text-green-600 font-semibold border-b-2 border-green-600 rounded"
                            : "text-gray-700"
                        }`
                    }
                >
                    About Us
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        `hover:text-green-600 transition duration-300 ease-in-out text-base px-2 py-1 ${isActive
                            ? "text-green-600 font-semibold border-b-2 border-green-600 rounded"
                            : "text-gray-700"
                        }`
                    }
                >
                    Contact
                </NavLink>
            </li>
        </>
    );

    return (
        <div className="sticky top-0 !z-50">
            <header>
                <TopBar />
            </header>

            <nav className="bg-white backdrop-blur-3xl  border-b border-gray-100 px-4">
                <div className="container mx-auto  ">
                    {/* ==== Mobile & Tablet Navbar ==== */}
                    <div className="navbar py-4 lg:hidden flex justify-between items-center">
                        {/* Logo Center */}
                        <div className="flex-1 flex  ">
                            <Link
                                to="/"
                                className="text-2xl font-bold text-green-500 flex items-center"
                            >
                                <div className="flex ">
                                    <span className="mr-2">{<img src={NavLogo} alt="Logo..." />}</span> Online Bazar
                                </div>
                            </Link>
                        </div>

                        {/* Hamburger Menu (Right Side) */}
                        <div className="dropdown dropdown-end border rounded">
                            <button tabIndex={0} className="btn btn-ghost">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </button>

                            {/* Dropdown Menu */}
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-60"
                            >
                                {/* Menu Items */}
                                {links}

                                {/* Icons in Dropdown */}
                                <div className="flex justify-around pt-4 border-t mt-2">
                                    <FiPhoneCall className="text-xl hover:text-green-500" />
                                    <GoSearch className="text-xl hover:text-green-500" />
                                    <FaRegHeart className="text-xl hover:text-green-500" />
                                    <AiOutlineShopping className="text-xl hover:text-green-500" />
                                    <FaRegUser className="text-xl hover:text-green-500" />
                                </div>
                            </ul>
                        </div>
                    </div>

                    {/* ==== Desktop Navbar Layout ==== */}
                    <div className="hidden lg:flex justify-between items-center py-5 xl:px-4">
                        {/* Left: Navigation Menu */}
                        <ul className="flex items-center space-x-8 text-gray-700">
                            {links}
                        </ul>

                        {/* Center: Logo */}
                        <div className="text-2xl font-bold text-green-500 flex items-center">
                            <Link to={"/"}>
                                {" "}
                                {/* <span className="mr-2">🌱</span> Online Bazar */}
                                <div className="flex ">
                                    <span className="mr-2">{<img src={NavLogo} alt="Logo..." />}</span> Online Bazar
                                </div>
                            </Link>
                        </div>

                        {/* Right: Icons */}
                        <div className="flex items-center space-x-6 text-gray-700">
                            <div className="flex items-center hover:text-green-500">
                                <FiPhoneCall className="text-2xl" />
                                <span className="ml-2 hidden xl:inline">(219) 555-0114</span>
                            </div>
                            <GoSearch className="text-2xl hover:text-green-500" />
                            <Link to={"/wishlist"}>
                                <FaRegHeart className="text-2xl hover:text-green-500" />
                            </Link>

                            <div className="relative">
                                <Link to={"/shoppingCart"}>
                                    <AiOutlineShopping className="text-2xl hover:text-green-500" />
                                </Link>
                                <span className="absolute -top-1 -right-2 bg-green-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                                    3
                                </span>
                            </div>
                            <Link to={"/signIn"}>
                                <FaRegUser className="text-2xl hover:text-green-500" />
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;