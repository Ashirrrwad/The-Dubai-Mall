import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "THE DUBAI MALL",
  description: "An interactive editorial sales experience designed for the ultimate retail destination.",
  icons: {
    icon: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=32&h=32&q=80",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable} lenis`}>
      <body className="antialiased bg-luxury-black text-luxury-light font-sans relative">
        {/* Premium Analog Texture Overlay */}
        <div className="luxury-noise" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
