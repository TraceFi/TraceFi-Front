"use client";

import Image from "next/image";
import { PLATFORM_ROUTES } from "@/constants/route";
import logo from "@/assets/navbar/logoName.png";
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="w-full py-4">
            <div className="flex items-center justify-between xl:px-14 2xl:px-20 mx-auto">
                <div className="flex-shrink-0">
                    <Image src={logo} alt="TraceFi logo" width={220} height={70} />
                </div>

                <div className="hidden md:flex items-center gap-x-20">
                    <ul className="flex gap-x-16 text-[26px] font-medium text-white">
                        <li>
                            <a href="#home" className="hover:text-neon-green transition">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#why-tracefi" className="hover:text-neon-green transition">
                                Features
                            </a>
                        </li>
                        <li>
                            <a href="#our-team" className="hover:text-neon-green transition">
                                Team
                            </a>
                        </li>
                    </ul>
                    <Link href={PLATFORM_ROUTES.TOP_POOLS} legacyBehavior>
                        <a 
                           className="inline-block bg-gradient-to-r from-neon-green to-space-teal text-space-dark font-tech text-[26px] font-bold py-3 px-10 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-neon-green/30 focus:outline-none focus:ring-2 focus:ring-neon-green/50"
                        >
                            Go To App
                        </a>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
