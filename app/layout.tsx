import type { Metadata } from "next";
import { Roboto, Roboto_Mono, Roboto_Slab } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout/Layout";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400"]
});

const robotoSlab = Roboto_Slab({
  variable: "--roboto-slab",
  subsets: ["latin"],
  weight: ["300", "700"]
});

const robotoMono = Roboto_Mono({
  variable: "--roboto-mono",
  subsets: ["latin"],
  weight: ["400"]
});

export const metadata: Metadata = {
  title: "MARKDOWN EDITOR",
  description: "A MARKDOWN GENERATOR BY RICKSON DEV"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${robotoSlab.variable} ${robotoMono.variable} antialiased`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
