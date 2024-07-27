import { Inter, Rubik } from "next/font/google";
import "./globals.css";
// Roboto_Serif;
const rubik = Rubik({
  subsets: ["latin"],
  variable: "--rubik",
  display: "swap",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "StreetPaw Connect",
  description:
    "A platform where pet lovers can connect and saves street animals lives ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${rubik.variable}`}>{children}</body>
    </html>
  );
}
