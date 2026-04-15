import type { Metadata } from "next";
import { GoogleAnalytics } from "../components/analytics/google-analytics";
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
  const gaId =
    process.env.NEXT_PUBLIC_GA_ID || "G-FJEPSFJQ6F";

  return (
    <html lang="en">
      <body>
        {children}
        {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
      </body>
    </html>
  );
}