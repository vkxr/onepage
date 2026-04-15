import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Digital Marketing & eCommerce Services in Gujarat | Veyber Services Pvt Ltd",
  description:
    "Veyber Services Pvt Ltd offers expert eCommerce development, digital marketing, social media management, and business consultancy services across Gujarat. Grow your business with result-driven strategies.",
  keywords:
    "Digital marketing company Gujarat, E-commerce development Gujarat, Social media management Gujarat, Business consultancy Gujarat, eCommerce account management India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${manrope.variable} ${inter.variable} antialiased`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
