export default function Projects() {
    const projects = [
        { size: "large", image: "/images/project-1-5-6.png" },
        { size: "large", image: "/images/project-2.png" },
        { size: "small", image: "/images/project-3.png" },
        { size: "small", image: "/images/project-4.png" },
        { size: "small", image: "/images/project-1-5-6.png" },
        { size: "small", image: "/images/project-1-5-6.png" },
    ]

    return (
        <section id="projects" className="h-screen snap-start flex items-center bg-white pt-[80px]">
            <div className="max-w-7xl mx-auto px-6">
                <span className="lg:text-sm font-bold text-orange-500 mb-8">Projects</span>
                <h2 className="text-4xl lg:text-5xl sm:text-2xl font-bold text-gray-900 mb-4 leading-tight">Highlighted Projects</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                    From UNESCO heritage sites to modern industrial complexes, explore our portfolio of precision scanning
                    projects.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 [&:has(.card:hover)_.card:not(:hover)]:opacity-40 
                [&:has(.card:hover)_.card:not(:hover)]:blur-[2px] 
                transition-all duration-500">
                    <div className="md:col-span-2 relative rounded-2xl overflow-hidden group cursor-pointer h-64 md:h-64 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl border-4 hover:border-orange-500 card">
                        <img src={projects[0].image || "/placeholder.svg"} alt="Project" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                            <div>
                                <span className="inline-block bg-gradient-to-r from-orange-600 to-orange-400 text-white text-xs px-3 py-1 rounded-lg mb-2">
                                    industry
                                </span>
                                <h3 className="text-white text-2xl font-bold">Project Name</h3>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-2 relative rounded-2xl overflow-hidden group cursor-pointer h-64 md:h-64 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl border-4 hover:border-orange-500 card">
                        <img src={projects[1].image || "/placeholder.svg"} alt="Project" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                            <div>
                                <span className="inline-block bg-gradient-to-r from-orange-600 to-orange-400 text-white text-xs px-3 py-1 rounded-lg mb-2">
                                    industry
                                </span>
                                <h3 className="text-white text-2xl font-bold">Project Name</h3>
                            </div>
                        </div>
                    </div>

                    {projects.slice(2).map((project, idx) => (
                        <div key={idx} className="relative rounded-2xl overflow-hidden group cursor-pointer h-48 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl border-4 hover:border-orange-500 card">
                            <img src={project.image || "/placeholder.svg"} alt="Project" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                                <div>
                                    <span className="inline-block bg-gradient-to-r from-orange-600 to-orange-400 text-white text-xs px-2 py-1 rounded-lg mb-1">
                                        industry
                                    </span>
                                    <h3 className="text-white font-bold">Project Name</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
