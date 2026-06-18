import { Fraunces, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = "https://www.stateofmindhealth.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Psychiatric Care in Suffern, NY | State of Mind Health",
  description:
    "Compassionate psychiatric care & medication management in Rockland County, NY. In-person & telehealth for anxiety, depression & ADHD. Board Certified PMHNP. Book today.",
  keywords: [
    "psychiatry",
    "psychiatric nurse practitioner",
    "Suffern NY",
    "Rockland County",
    "medication management",
    "telehealth",
    "anxiety",
    "depression",
    "ADHD",
    "genetic testing",
  ],
  authors: [{ name: "State of Mind Health" }],
  creator: "State of Mind Health",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "State of Mind Health",
    title: "Psychiatric Care in Suffern, NY | State of Mind Health",
    description:
      "Compassionate psychiatric care & medication management in Rockland County, NY. In-person & telehealth for anxiety, depression & ADHD. Book today.",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "State of Mind Health",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psychiatric Care in Suffern, NY | State of Mind Health",
    description:
      "Compassionate psychiatric care & medication management in Rockland County, NY. In-person & telehealth for anxiety, depression & ADHD.",
    images: [`${siteUrl}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }) {
  const businessPhone = "(845) 653-7330";
  const businessEmail = "office@stateofmindhealth.com";
  const businessAddress =
    "222 New York 59, Suite 304, Suffern, NY 10901";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "State of Mind Health",
    description:
      "Psychiatric care and medication management in Suffern, NY and tri-state area",
    url: siteUrl,
    telephone: businessPhone,
    email: businessEmail,
    address: {
      "@type": "PostalAddress",
      streetAddress: "222 New York 59, Suite 304",
      addressLocality: "Suffern",
      addressRegion: "NY",
      postalCode: "10901",
      addressCountry: "US",
    },
    areaServed: ["Rockland County, NY", "New York", "New Jersey", "Connecticut"],
    sameAs: [
      "https://www.google.com/maps/search/State+of+Mind+Health+Suffern+NY",
    ],
    medicalSpecialty: "Psychiatry",
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
      </head>
      <body
        className={`${fraunces.variable} ${hankenGrotesk.variable} font-body text-ink bg-canvas`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />

        {/* Hidden contact info for screen readers and SEO */}
        <div className="sr-only">
          <p>Contact State of Mind Health: {businessPhone}</p>
          <p>Email: {businessEmail}</p>
          <p>Address: {businessAddress}</p>
        </div>
      </body>
    </html>
  );
}
