import { inter } from "@/config/fonts";
import type { Metadata } from "next";


import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: '%s - FR | Ecommerce',
    default: 'Home'
  },
  description: "Una tienda en linea de productos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
