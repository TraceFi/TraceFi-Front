import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden text-white">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="font-tech text-4xl md:text-5xl font-bold mb-8">
          Ready to take off with <span className="bg-gradient-to-r from-neon-green to-space-teal text-transparent bg-clip-text">TraceFi</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
          Join thousands of investors who are already automating their strategies.
          </p>
          <Link href="/Platform/topPools" legacyBehavior>
            <a 
              className="inline-block bg-gradient-to-r from-neon-green to-space-teal text-space-dark font-tech text-xl font-bold py-4 px-12 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-neon-green/40 focus:outline-none focus:ring-4 focus:ring-neon-green/50"
            >
              Start Now
            </a>
          </Link>
        </div>
        
        <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-neon-green/10 blur-3xl pointer-events-none"></div>
        <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-space-purple/10 blur-3xl pointer-events-none"></div>
      </div>
    </section>
  );
} 