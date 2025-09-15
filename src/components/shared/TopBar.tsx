
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const TopBar = () => {
    return (
        <div className="bg-green-50">
            <div className="container mx-auto block  py-2 px-2 md:px-6">
                <div className=" flex justify-between items-center gap-3">
                    {/* Store Location */}
                    <div className="flex  items-center space-x-2 text-gray-700">
                        <FaMapMarkerAlt className="text-base md:text-lg text-green-500" />
                        <span className="text-xs md:text-sm">
                            Store Location: Lincoln - 344, Illinois, Chicago, USA
                        </span>
                    </div>

                    {/* Language Dropdown */}

                    {/* Currency Dropdown */}
                    <div className="flex items-center space-x-4 text-gray-700">
                        <div className="flex items-center space-x-4 text-gray-700">
                            <span className="text-xs md:text-sm">Eng</span>
                            <IoIosArrowDown className="text-xs md:text-sm" />
                        </div>
                        <span className="text-xs md:text-sm">USD</span>
                        <IoIosArrowDown className="text-xs md:text-sm" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
