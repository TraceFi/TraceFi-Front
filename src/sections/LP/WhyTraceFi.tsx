import { Bot, Gauge, Lock, TrendingUp, PieChart, Lightbulb } from 'lucide-react';

const features = [
  {
    icon: <Bot size={36} className="text-neon-green" />,
    title: "Automated CopyTrade",
    description: "Mirror pool transactions with one click and maximize your earnings effortlessly.",
    accentColorClass: "hover:border-neon-green hover:shadow-neon-green/40"
  },
  {
    icon: <Gauge size={36} className="text-neon-green" />,
    title: "Intuitive Interface",
    description: "A simple and powerful platform, designed for investors of all levels.",
    accentColorClass: "hover:border-neon-green hover:shadow-neon-green/40"
  },
  {
    icon: <Lock size={36} className="text-neon-green" />,
    title: "Web3 Security",
    description: "Integrated with the largest DEXs and security protocols in the ecosystem.",
    accentColorClass: "hover:border-neon-green hover:shadow-neon-green/40"
  },
  {
    icon: <TrendingUp size={36} className="text-neon-green" />,
    title: "Track Top Pools",
    description: "Stay on top of the most profitable and promising liquidity pools in the market.",
    accentColorClass: "hover:border-neon-green hover:shadow-neon-green/40"
  },
  {
    icon: <PieChart size={36} className="text-neon-green" />,
    title: "Monitor Your Earnings",
    description: "Visualize your investment performance with clear and detailed reports.",
    accentColorClass: "hover:border-neon-green hover:shadow-neon-green/40"
  },
  {
    icon: <Lightbulb size={36} className="text-neon-green" />,
    title: "Insights and Analysis",
    description: "Use data and advanced analytics to make smarter investment decisions.",
    accentColorClass: "hover:border-neon-green hover:shadow-neon-green/40"
  },
];

export default function WhyTraceFi() {
  return (
    <section id="why-tracefi" className="py-20 relative text-white">
      <div className="container mx-auto px-6">
        <h2 className="font-tech text-4xl md:text-5xl font-bold text-center mb-20">
          Why <span className="bg-gradient-to-r from-neon-green to-space-teal text-transparent bg-clip-text">TraceFi</span>?
        </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`p-8 rounded-xl border border-white/10 relative overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl group ${feature.accentColorClass}`}
              style={{ backgroundColor: 'rgba(20, 36, 51, 0.5)', backdropFilter: 'blur(5px)' }}
            >
              <div className="w-16 h-16 bg-black/20 rounded-xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-current transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="font-tech text-2xl font-bold mb-4 text-white">{feature.title}</h3>
              <p className="text-gray-300 text-base leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 