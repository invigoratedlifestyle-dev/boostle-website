import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Boostle | Shopify apps built to increase conversions",
  description:
    "Boostle builds lightweight Shopify apps designed to increase conversions and improve the customer journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}