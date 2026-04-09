import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Toaster } from "sonner";
import { Providers } from "@/components/providers";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kondeti Super Speciality Hospitals | Premier Healthcare in Hyderabad",
  description:
    "Kondeti Super Speciality Hospitals in Hyderabad offers world-class healthcare services including gynecology, cardiology, orthopedics, neurology, pediatrics, and 24/7 emergency care. Led by experienced specialists.",
  keywords: [
    "hospital",
    "Hyderabad",
    "multi-speciality",
    "gynecology",
    "cardiology",
    "orthopedics",
    "neurology",
    "pediatrics",
    "emergency care",
    "Kondeti Hospital",
    "Maheshwaram",
    "Tukkuguda",
  ],
  openGraph: {
    title: "Kondeti Super Speciality Hospitals",
    description:
      "Where Compassion Meets World-Class Medicine. Premier multi-speciality healthcare in Hyderabad.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground overflow-x-hidden">
        <Providers>
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              classNames: {
                toast:
                  "!bg-card !border-border !text-foreground !shadow-xl",
                description: "!text-muted-foreground",
                success: "!border-gold/30",
              },
            }}
          />
        </Providers>
      </body>
    </html>
  );
}
