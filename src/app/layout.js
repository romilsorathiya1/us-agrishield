import "./globals.css";

export const metadata = {
  title: "US AgriShield | Agriculture Product Solutions",
  description:
    "US AgriShield supplies agriculture product solutions including insecticides, fungicides, and PGR products from Ahmedabad, Gujarat.",
  keywords: [
    "US AgriShield",
    "agriculture products",
    "insecticide",
    "fungicide",
    "PGR",
    "crop protection",
    "Ahmedabad",
  ],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
