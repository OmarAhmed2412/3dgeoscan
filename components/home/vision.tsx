'use client';

export default function Solutions() {
    return (
        <section id="vision" className="h-screen snap-start flex items-center bg-white pt-[80px]">
            <div className="max-w-7xl mx-auto px-6 w-full">
                <span className="lg:text-sm font-bold text-orange-500 mb-8">Vision</span>
                <h2 className="text-4xl lg:text-5xl sm:text-2xl font-bold text-gray-900 mb-8 leading-tight">
                    Solutions Across Every Sector
                </h2>

                <div className="w-full rounded-2xl overflow-hidden max-h-[500px] lg:max-h-[500px]">
                    <img 
                        src="./images/project-2.png" 
                        alt="Solutions" 
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
}