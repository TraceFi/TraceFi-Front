import Image from 'next/image';
import Link from 'next/link';
import { Twitter, Linkedin, BookText, ShieldCheck } from 'lucide-react';
import { FaDiscord } from 'react-icons/fa';
import logo from "@/assets/navbar/logoName.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Platform",
      links: [
        { href: "/Platform/topPools", label: "Overview", icon: null },
        { href: "/Platform/topPools", label: "Top Pools", icon: null },
        { href: "/Platform/how-it-works", label: "How It Works", icon: null },
      ]
    },
    {
      title: "Community",
      links: [
        { href: "#", label: "Discord", icon: <FaDiscord size={16} className="mr-2" /> },
        { href: "https://x.com/Trace_fi", label: "Twitter/X", icon: <Twitter size={16} className="mr-2" /> },
        { href: "#", label: "LinkedIn", icon: <Linkedin size={16} className="mr-2" /> },
      ]
    },
    {
      title: "Resources",
      links: [
        { href: "/docs", label: "Documentation", icon: <BookText size={16} className="mr-2 inline" /> },
        { href: "/terms", label: "Terms of Use", icon: <ShieldCheck size={16} className="mr-2 inline" /> },
        { href: "/privacy", label: "Privacy Policy", icon: <ShieldCheck size={16} className="mr-2 inline" /> },
      ]
    }
  ];

  return (
    <footer className="bg-space-dark border-t border-white/10 text-gray-300 pt-20 pb-8 w-full">
      <div className="flex justify-between items-start px-40 pb-20">
        <div className="flex-shrink-0">
          <Link href="/LP" legacyBehavior>
            <a className="inline-block">
              <Image src={logo} alt="TraceFi logo" width={200} height={60} />
            </a>
          </Link>
          <p className="mt-4 max-w-xs text-lg leading-relaxed">
          TraceFi is revolutionizing liquidity pools in web3, making complex strategies accessible to everyone
          </p>
        </div>
        <div className="flex space-x-40">
          {footerSections.map(section => (
            <div key={section.title}>
              <h4 className="font-tech text-[24px] font-semibold text-white mb-5">{section.title}</h4>
              <ul className="space-y-6">
                {section.links.map(link => (
                  <li key={link.label} className="text-[20px]">
                    <Link href={link.href} legacyBehavior>
                      <a className="hover:text-neon-green transition-colors text-[16px] flex items-center" target='_blank'>
                        {link.icon && <span className="mr-2">{link.icon}</span>}
                        {link.label}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center px-10">
        <p className="text-xs text-gray-500 mb-4 md:mb-0">
          &copy; {currentYear} TraceFi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
