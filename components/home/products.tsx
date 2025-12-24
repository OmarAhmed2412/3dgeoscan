import React from 'react';

export default function Products() {
    // Define brand color for consistency
    const brandColorClass = 'text-orange-600';
    const brandBgClass = 'bg-orange-600';

    return (
        <section id='products' className="h-screen snap-start flex items-center bg-white pt-[80px]">
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Heading */}
                <h2 className="text-center text-4xl lg:text-5xl sm:text-2xl font-bold text-gray-900 mb-4 leading-tight">
                    Our Products
                </h2>

                {/* Carousel Main Content Area */}
                <div className="relative flex items-center">

                    {/* Left Navigation Arrow (Placeholder) */}
                    <button aria-label="Previous" className="hidden md:block absolute left-0 z-20 p-2 text-gray-400 hover:text-gray-800 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>

                    {/* Main Grid Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center w-full md:px-16">

                        {/* --- Left Column: Features --- */}
                        <div className="lg:col-span-1 space-y-10 order-2 lg:order-1 mt-8 lg:mt-0 pl-4 lg:pl-0">
                            {/* Feature 1 */}
                            <div className="flex items-center gap-6">
                                <div className={`w-12 h-12 ${brandColorClass}`}>
                                    {/* SVG Placeholder: Camera Icon */}
                                    <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M31.4932 9C32.305 8.99999 33.1017 9.21957 33.7989 9.63548C34.496 10.0514 35.0677 10.6481 35.4532 11.3625L36.5468 13.3875C36.9323 14.1019 37.504 14.6986 38.2011 15.1145C38.8983 15.5304 39.695 15.75 40.5068 15.75H45C46.1935 15.75 47.3381 16.2241 48.182 17.068C49.0259 17.9119 49.5 19.0565 49.5 20.25V40.5C49.5 41.6935 49.0259 42.8381 48.182 43.682C47.3381 44.5259 46.1935 45 45 45H9C7.80653 45 6.66193 44.5259 5.81802 43.682C4.97411 42.8381 4.5 41.6935 4.5 40.5V20.25C4.5 19.0565 4.97411 17.9119 5.81802 17.068C6.66193 16.2241 7.80653 15.75 9 15.75H13.4933C14.3042 15.75 15.1001 15.5309 15.7968 15.1159C16.4934 14.7008 17.065 14.1052 17.451 13.392L18.5512 11.358C18.9373 10.6448 19.5088 10.0492 20.2055 9.63413C20.9022 9.21905 21.6981 8.99996 22.509 9H31.4932Z" stroke="#E55C24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M26.75 34C30.4779 34 33.5 30.9779 33.5 27.25C33.5 23.5221 30.4779 20.5 26.75 20.5C23.0221 20.5 20 23.5221 20 27.25C20 30.9779 23.0221 34 26.75 34Z" stroke="#E55C24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                </div>
                                <span className="text-xl text-gray-800 font-medium">With Camera</span>
                            </div>
                            {/* Feature 2 */}
                            <div className="flex items-center gap-6">
                                <div className={`w-12 h-12 ${brandColorClass}`}>
                                    {/* SVG Placeholder: Software Icon */}
                                    <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.25 38.25H9C7.80653 38.25 6.66193 37.7759 5.81802 36.932C4.97411 36.0881 4.5 34.9435 4.5 33.75V11.25C4.5 10.0565 4.97411 8.91193 5.81802 8.06802C6.66193 7.22411 7.80653 6.75 9 6.75H45C46.1935 6.75 47.3381 7.22411 48.182 8.06802C49.0259 8.91193 49.5 10.0565 49.5 11.25V33.75C49.5 34.9435 49.0259 36.0881 48.182 36.932C47.3381 37.7759 46.1935 38.25 45 38.25H42.75" stroke="#E55C24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M27 33.75L38.25 47.25H15.75L27 33.75Z" stroke="#E55C24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                </div>
                                <span className="text-xl text-gray-800 font-medium">Software Included</span>
                            </div>
                            {/* Feature 3 */}
                            <div className="flex items-center gap-6">
                                <div className={`w-12 h-12 ${brandColorClass}`}>
                                    {/* SVG Placeholder: Environment Icon */}
                                    <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M27 18L40.5 11.25L27 4.5V27" stroke="#E55C24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M18 26.9775L5.62501 34.0425C5.27874 34.2388 4.99072 34.5234 4.79034 34.8673C4.58995 35.2111 4.48437 35.602 4.48438 36C4.48438 36.3981 4.58995 36.7889 4.79034 37.1328C4.99072 37.4767 5.27874 37.7613 5.62501 37.9575L24.75 48.8925C25.4341 49.2875 26.2101 49.4954 27 49.4954C27.7899 49.4954 28.5659 49.2875 29.25 48.8925L48.375 37.9575C48.7213 37.7613 49.0093 37.4767 49.2097 37.1328C49.4101 36.7889 49.5156 36.3981 49.5156 36C49.5156 35.602 49.4101 35.2111 49.2097 34.8673C49.0093 34.5234 48.7213 34.2388 48.375 34.0425L36 27" stroke="#E55C24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M14.6025 28.9126L39.3975 43.0876" stroke="#E55C24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M39.3975 28.9126L14.625 43.0876" stroke="#E55C24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                </div>
                                <span className="text-xl text-gray-800 font-medium">Environment dependant V2</span>
                            </div>
                        </div>

                        {/* --- Center Column: Product Image --- */}
                        <div className="lg:col-span-1 relative flex justify-center order-1 lg:order-2">
                            {/* Background Decorative Triangle SVG Placeholder */}
                            <div className="absolute top-0 left-0 -translate-x-12 -translate-y-10 w-64 h-64 text-orange-500 opacity-50 z-10 pointer-events-none">
                                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
                                    <path d="M10 10 L90 50 L10 90 Z" />
                                </svg>
                            </div>

                            {/* Main Product Image Placeholder */}
                            <div className="w-full max-w-md z-10">
                                {/* REPLACE src below with your actual product image */}
                                <img
                                    src="/images/product-1.png"
                                    alt="ZEB Horizon XYZ Scanner"
                                    className="w-full h-auto object-contain drop-shadow-xl transform hover:scale-105 transition duration-300"
                                />
                            </div>
                        </div>

                        {/* --- Right Column: Product Details --- */}
                        <div className="lg:col-span-1 flex flex-col justify-center order-3 relative pr-12 lg:pr-0">
                            {/* Product Logo Placeholder */}
                            <div className="mb-6">
                                {/* REPLACE src below with product logo */}
                                <img src="/images/geo-slam.svg" alt="Geo Slam Logo" className="h-10 w-auto object-contain" />
                            </div>

                            {/* Product Title & Model */}
                            <h3 className="text-4xl font-bold text-gray-900 mb-2">ZEB Horizon XYZ</h3>
                            <p className={`text-lg font-medium ${brandColorClass} mb-6`}>model</p>

                            {/* Description */}
                            <p className="text-gray-600 leading-relaxed mb-8 max-w-md">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>

                            {/* View More Button */}
                            <div>
                                <button className="group flex items-center gap-2 px-8 py-3 bg-transparent border-2 border-gray-800 rounded-full text-gray-800 font-semibold cursor-pointer hover:bg-gray-800 hover:text-white transition duration-300">
                                    View More
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Navigation Arrow (Placeholder) */}
                    <button aria-label="Next" className="hidden md:block absolute right-0 z-20 p-2 text-gray-400 hover:text-gray-800 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>

                {/* Bottom Pagination Dots (Visible on all screens) */}
                <div className="flex justify-center items-center gap-3 mt-16">
                    <div className={`w-3 h-3 rounded-full ${brandBgClass}`}></div> {/* Active dot */}
                    <div className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 cursor-pointer transition"></div>
                    <div className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 cursor-pointer transition"></div>
                    <div className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 cursor-pointer transition"></div>
                    <div className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 cursor-pointer transition"></div>
                </div>

            </div>
        </section>
    );
};