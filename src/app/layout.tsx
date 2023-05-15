"use-client";
import { ReactNode } from "react";
import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Enzo Spagnolli",
  description: "Personal portfolio created with nextjs and fastify",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
