import Navbar from "@/sections/LP/Navbar";
import Hero from "@/sections/LP/Hero";
import WhyTraceFi from "@/sections/LP/WhyTraceFi";
import OurTeam from "@/sections/LP/OurTeam";
import CTASection from "@/sections/LP/CTASection";
import Footer from "@/sections/LP/Footer";
import StarsBackground from "@/sections/LP/StarsBackground";
// import NeonDivider from "@/sections/LP/common/NeonDivider"; // Removido
// import background from "@/assets/navbar/background4.png"; // No longer needed for Hero background

export default function TraceFiLandingPage() {
    return (
        // Ensure the main background is space-dark
        <div className="relative overflow-x-hidden w-full bg-space-dark text-white">
            <StarsBackground />
            {/* This div now also inherits bg-space-dark, no specific background image */}
            <div
                className="min-h-screen flex flex-col relative z-10" // Use flex to structure Navbar and Hero
            >
                <Navbar />
                <Hero /> {/* Hero component might need internal adjustments if it relied on specific bg */}
            </div>
            <main className="relative z-10">
                <WhyTraceFi />
                <OurTeam />
                <CTASection />
            </main>
            <Footer /> 
        </div>
    );
}