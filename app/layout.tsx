import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const siteUrl = "https://www.nablatnici.cz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Na Blatnici – Nové byty ve Frýdku-Místku",
    template: "%s | Na Blatnici"
  },
  description:
    "Rezidenční projekt Na Blatnici ve Frýdku-Místku. Moderní byty 2+kk až 4+kk s terasami, podlahovým vytápěním, rekuperací a Smart Home. Vyberte si svůj byt.",
  keywords: [
    "byty Frýdek-Místek",
    "Na Blatnici",
    "nové byty",
    "rezidenční projekt",
    "byty na prodej",
    "moderní bydlení",
    "Frýdek-Místek"
  ],
  authors: [{ name: "Na Blatnici" }],
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: siteUrl,
    siteName: "Na Blatnici",
    title: "Na Blatnici – Nové byty ve Frýdku-Místku",
    description:
      "Rezidenční projekt Na Blatnici ve Frýdku-Místku. Moderní byty 2+kk až 4+kk s terasami, podlahovým vytápěním, rekuperací a Smart Home.",
    images: [
      {
        url: "/fotky/fotografie-exterier/prechod.webp",
        width: 1200,
        height: 630,
        alt: "Rezidenční projekt Na Blatnici – Frýdek-Místek"
      }
    ]
  },
  icons: {
    icon: "/images/hosue.png",
    apple: "/images/hosue.png"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body className="flex min-h-screen flex-col bg-neutral-50 text-neutral-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}


