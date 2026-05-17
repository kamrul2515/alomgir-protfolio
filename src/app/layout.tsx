import type { Metadata } from "next";
import { Space_Grotesk, Inter, Hind_Siliguri } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const hindSiliguri = Hind_Siliguri({
  variable: "--font-bengali",
  subsets: ["bengali"],
  weight: ["300", "400", "500", "600", "700"],
});

import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "আলমগীর কম্পিউটার সেন্টার",
  description: "আলমগীর কম্পিউটার সেন্টার - নীলফামারী",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" suppressHydrationWarning className={`${spaceGrotesk.variable} ${inter.variable} ${hindSiliguri.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-bengali selection:bg-primary-container selection:text-white min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <SmoothScrolling>
            {children}
          </SmoothScrolling>
        </ThemeProvider>
      </body>
    </html>
  );
}
