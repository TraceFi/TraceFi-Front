import type { Metadata } from "next";
import { Inter, Rajdhani } from "next/font/google";
import "@/styles/globals.css";
import WalletContextProvider from "@/components/providers/WalletContextProvider";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
});

const rajdhani = Rajdhani({
    variable: "--font-rajdhani",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "TraceFi",
    description: "Platform of Pools Copy Trade",
    icons: {
        icon: "/favicon.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html>
            <body
                className={`${inter.variable} ${rajdhani.variable} font-sans antialiased bg-neutral-950 text-white overflow-x-hidden`}
            >
                <WalletContextProvider>{children}</WalletContextProvider>
            </body>
        </html>
    );
}
