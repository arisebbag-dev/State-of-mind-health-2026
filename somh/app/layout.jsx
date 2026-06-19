import { Fraunces, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SideFlyout from "@/components/SideFlyout";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = "https://www.stateofmindhealth.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Psychiatric Care in Suffern, NY | State of Mind Health",
  description:
    "Root-cause psychiatric care in Rockland County, NY and tri-state telehealth. Genetic testing, hormonal psychiatry, and a provider who truly listens. Out-of-network with superbills.",
  keywords: [
    "psychiatry Suffern NY",
    "psychiatric nurse practitioner Rockland County",
    "genetic testing psychiatry",
    "hormonal psychiatry",
    "MTHFR",
    "telepsychiatry tri-state",
    "out of network psychiatrist",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "State of Mind Health",
    title: "Psychiatric Care in Suffern, NY | State of Mind Health",
    description:
      "Root-cause psychiatric care: genetic testing, hormonal psychiatry, and a provider who truly listens.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${hanken.variable} font-body bg-sand text-ink`}>
        <Navbar />
        <SideFlyout />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
