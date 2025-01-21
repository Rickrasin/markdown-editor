import type { Metadata } from "next";
import { Roboto, Roboto_Mono, Roboto_Slab } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout/Layout";
import MarkdownProvider from "@/context/MarkdownContext";
import ThemeProvider from "@/Providers/Providers";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400"]
});

const robotoSlab = Roboto_Slab({
  variable: "--roboto-slab",
  subsets: ["latin"],
  weight: ["300", "400", "700"]
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${roboto.variable} ${robotoSlab.variable} ${robotoMono.variable} antialiased `}
      >
        <ThemeProvider>
          <MarkdownProvider>
            <Layout>{children}</Layout>
          </MarkdownProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
