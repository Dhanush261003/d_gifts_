import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "d_gifts_",
  description: "Developed by d_gifts_",
  verification: {
    google: "mTC4ybEVdjdJSkSK3ifhxOCiBnXXXHzgbRU2U2BEt_4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <meta
        name="google-site-verification"
        content="mTC4ybEVdjdJSkSK3ifhx0CiBnXXXHzgbRU2UZBEt_4"
      />
    </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
