import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EcoBank.",
  description: "EcoBank Website",
  keywords: ["Eco", "Recycle", "Sampah", "Penukaran Sampah"],
  authors: [{ name: "EcoBank Team" }],
  applicationName: "EcoBank",
  icons: {
    icon: "/logo/ecobank-logo-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${plusJakartaSans.variable} antialiased`}
        suppressHydrationWarning
      >

        <main>{children}</main>
      </body>
    </html>
  );
}
