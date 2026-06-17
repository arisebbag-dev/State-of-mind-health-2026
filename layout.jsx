import { Fraunces, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz"],
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

// Update this to your live domain before launch.
const siteUrl = "https://www.stateofmindhealth.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Psychiatric Care in Suffern, NY | State of Mind Health",
    template: "%s | State of Mind Health",
  },
  description:
    "Compassionate psychiatric care & medication management in Rockland County, NY. In-person & telehealth for anxiety, depression & ADHD. Book today.",
  keywords: [
    "psychiatric nurse practitioner Rockland County",
    "medication management Suffern NY",
    "ADHD treatment Rockland County",
    "telepsychiatry New York",
    "psychiatrist Suffern NY",
    "anxiety treatment tri-state",
  ],
  openGraph: {
    title: "Psychiatric Care in Suffern, NY | State of Mind Health",
    description:
      "Personalized, compassionate psychiatric care for anxiety, depression, ADHD and more. In-person in Suffern, NY and telehealth across the tri-state area.",
    url: siteUrl,
    siteName: "State of Mind Health",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${hanken.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
