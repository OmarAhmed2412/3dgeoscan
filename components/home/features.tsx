const FEATURES = [
  {
    title: "high precision",
    description: "millimeter-accurate 3d scanning for detailed geospatial data.",
    icon: "🎯",
  },
  {
    title: "fast processing",
    description: "quick turnaround times with our advanced processing systems.",
    icon: "⚡",
  },
  {
    title: "global coverage",
    description: "we operate worldwide with a network of scanning experts.",
    icon: "🌍",
  },
  {
    title: "expert support",
    description: "dedicated team of geospatial professionals at your service.",
    icon: "👨‍💼",
  },
  {
    title: "latest technology",
    description: "using cutting-edge equipment and software solutions.",
    icon: "🔬",
  },
  {
    title: "secure data",
    description: "your data is protected with enterprise-level security.",
    icon: "🔒",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* section header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold uppercase tracking-widest mb-2">
            features
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            why choose us?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            industry-leading 3d scanning solutions for every need
          </p>
        </div>

        {/* features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-gray-50 rounded-2xl hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="text-5xl mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}