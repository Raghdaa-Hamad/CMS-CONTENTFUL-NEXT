import "./globals.css";
import { Inter } from "next/font/google";
import { EXAMPLE_PATH, CMS_NAME } from "../lib/constants";
import Page from "./page";
import Header from "./components/header";
import Footer from "./components/footer";
import Navbar from "./components/navbar";


export const metadata = {
  title: `Next.js and ${CMS_NAME} Example`,
  description: `This is an E-commerce website with Next.js and ${CMS_NAME}.`,
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});




export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <section className="flex flex-col min-h-screen">
          <Navbar />
          <Header />
          <main >{children}
           
          </main>
          <Footer />
        </section>
      </body>
    </html>
  );
}
