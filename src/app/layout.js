// app/layout.js  (ya layout.tsx)
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../Homesections/Header.jsx";
import Footer from "../Homesections/Footer.jsx";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AI Companion",
  description: "Your emotionally intelligent friend",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Tailwind CDN */}
        <script src="https://cdn.tailwindcss.com"></script>

        {/* Custom Colors — YEH LINE THODI GALAT THI, AB FIX KI */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                theme: {
                  extend: {
                    colors: {
                      pink: { 300: '#f9a8d4', 400: '#f472b6', 500: '#ec4899', 600: '#db2777' },
                      purple: { 300: '#d8b4fe', 400: '#c084fc', 500: '#a78bfa', 600: '#8b5cf6' },
                      cyan: { 300: '#99f6e4', 400: '#22d3ee' }
                    }
                  }
                }
              }
            `.trim(),
          }}
        />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}