import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PUG Coin",
  description: "Pug's favorite coin",
  image: "/pug.jpeg",
  type: "website",
  site_name: "PUG Coin",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
