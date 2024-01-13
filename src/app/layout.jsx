import { roboto } from "./fonts";
import "./globals.css";
import Header from "../components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Foofest festival",
  description: "Foofests main page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className + " min-h-screen flex flex-col"}>
        <Header></Header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
