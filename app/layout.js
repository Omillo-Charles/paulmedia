import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "GP Media Productions | Professional Photography & Videography",
  description: "Professional photography, videography, graphic design, and editing services by Geoffrey Paul. Capturing moments that last forever.",
  keywords: "photography, videography, graphic design, editing, Kenya, GP Media, Geoffrey Paul, professional photographer",
  authors: [{ name: "Geoffrey Paul" }],
  creator: "Geoffrey Paul",
  publisher: "GP Media Productions",
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: "GP Media Productions | Professional Photography & Videography",
    description: "Professional photography, videography, graphic design, and editing services by Geoffrey Paul.",
    type: "website",
    locale: "en_US",
    siteName: "GP Media Productions",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} antialiased`}>
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
