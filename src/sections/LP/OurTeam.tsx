import Image from "next/image";
import deagAvatar from "@/assets/ourTeam/deag.png";
import kukaAvatar from "@/assets/ourTeam/kuka.png";
import mattAvatar from "@/assets/ourTeam/matt.png";
import c0untinAvatar from "@/assets/ourTeam/c0utin.png";

const teamMembers = [
  {
    name: "Kuka",
    role: "Business Developer",
    bio: "Solana Grandmaster",
    avatar: kukaAvatar,
    gradientFrom: "from-space-purple",
    gradientTo: "to-space-teal",
  },
  {
    name: "DeaG",
    role: "Blockchain Developer",
    bio: "Full-Stack Sorcerer",
    avatar: deagAvatar,
    gradientFrom: "from-space-yellow",
    gradientTo: "to-neon-green",
  },
  {
    name: "C0untin",
    role: "Blockchain Developer",
    bio: "Hokage of Coding",
    avatar: c0untinAvatar,
    gradientFrom: "from-space-teal",
    gradientTo: "to-space-purple",
  },
  {
    name: "Matt",
    role: "Growth Specialist",
    bio: "Growth Hacker",
    avatar: mattAvatar,
    gradientFrom: "from-neon-green",
    gradientTo: "to-space-teal",
  },
];

export default function OurTeam() {
  return (
    <section id="our-team" className="py-20 relative text-white">
      <div className="container mx-auto px-6">
        <h2 className="font-tech text-4xl md:text-5xl font-bold text-center mb-4">
          Our{" "}
          <span className="bg-gradient-to-r from-neon-green to-space-teal text-transparent bg-clip-text">
            Team
          </span>
        </h2>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-20 text-lg">
          We are builders of the Web3 era, passionate about Solana ecosystem.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-white/10 hover:border-neon-green/70 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-neon-green/20"
              style={{
                backgroundColor: "rgba(20, 36, 51, 0.5)",
                backdropFilter: "blur(5px)",
              }}
            >
              <div
                className={`w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br ${member.gradientFrom} ${member.gradientTo} p-1 shadow-lg`}
              >
                <div className="relative w-full h-full rounded-full bg-black/30 overflow-hidden flex items-center justify-center">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    fill
                    sizes="128px"
                    className="object-cover object-center rounded-full"
                    style={{ maxWidth: "128px", maxHeight: "128px" }}
                  />
                </div>
              </div>
              <h3 className="font-tech text-2xl font-bold text-center mb-1 text-white">
                {member.name}
              </h3>
              <p className="text-center text-neon-green text-base mb-3 font-medium">
                {member.role}
              </p>
              <p className="text-center text-gray-300 text-sm leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
