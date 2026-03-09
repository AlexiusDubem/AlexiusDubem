import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/ui/header-1";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alexius Dubem | Full Stack Developer in Nigeria | AI & Prompt Engineering Specialist",
  description:
    "Alexius Dubem is a Nigeria-based Full Stack Developer and AI Systems Engineer specializing in scalable web applications, prompt engineering, and intelligent automation systems. Founder & CEO of Develix Tech Ltd.",
  keywords: [
    "Full Stack Developer in Nigeria",
    "AI Developer Nigeria",
    "Prompt Engineer Africa",
    "Frontend Developer Nigeria",
    "Web Developer Anambra State",
    "Develix Tech Ltd",
    "Alexius Dubem"
  ],
  authors: [{ name: "Alexius Dubem" }],
  openGraph: {
    title: "Alexius Dubem | Full Stack Developer | AI & Prompt Engineering",
    description: "Building scalable, secure, and intelligent web systems in Nigeria.",
    type: "website",
    url: "https://yourdomain.com",
    siteName: "Alexius Dubem Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alexius Dubem | AI Systems Engineer",
    description: "Full Stack Developer specializing in AI integration and Prompt Engineering.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Font Awesome 6 Free CDN */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={`${inter.variable} antialiased min-h-screen`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
