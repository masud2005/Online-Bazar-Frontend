import { FaRegHeart, FaUser, FaComments, FaArrowRight } from "react-icons/fa";

import Blog1 from "../../assets/blog/blog1.png";
import Blog2 from "../../assets/blog/blog2.png";
import Blog3 from "../../assets/blog/blog3.png";


const Blog = () => {
    return (
        <section className="w-full bg-[#F2F2F2]">
            <div className="container mx-auto px-4 py-12">
                <div className="text-center mb-10">
                    <p className="text-green-500 uppercase text-sm tracking-widest mb-2">
                        Blog
                    </p>
                    <h2 className="text-3xl font-bold text-gray-800">Latest News</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8">
                    {[Blog1, Blog2, Blog3].map((img, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition hover:shadow-xl hover:-translate-y-1 duration-300 group"
                        >
                            {/* Image */}
                            <div className="relative w-full md:h-[220px] xl:h-[260px] overflow-hidden">
                                <img
                                    src={img}
                                    alt="Blog Cover"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute top-3 left-3 bg-white text-black text-xs font-semibold px-3 py-1 rounded shadow">
                                    {index === 1 ? "23 JAN" : "18 NOV"}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-3 md:p-5 flex flex-col flex-grow">
                                <div className="flex gap-4 text-xs text-gray-400 mb-2 flex-wrap">
                                    <span className="flex items-center gap-1">
                                        <FaRegHeart className="text-green-500" /> Food
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <FaUser className="text-green-500" /> By Admin
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <FaComments className="text-green-500" /> 65 Comments
                                    </span>
                                </div>

                                <h3 className="text-base font-semibold text-gray-800 mb-4 leading-snug">
                                    Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.
                                </h3>

                                <a
                                    href="#"
                                    className="text-green-600 font-semibold flex items-center gap-2 mt-auto hover:underline"
                                >
                                    Read More <FaArrowRight />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default Blog;
