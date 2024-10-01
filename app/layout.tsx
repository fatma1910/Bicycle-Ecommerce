import type { Metadata } from "next";
import "./globals.css";

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

import {Rajdhani} from "next/font/google"
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartProvider from "./components/CartProvider";
import { Toaster } from "./components/ui/toaster";

const rajdhani = Rajdhani({ subsets: ['latin'], weight:['300', "400" , "500", "600" , "700" ],
  variable: "--font-rajdhani"
 });


export const metadata: Metadata = {
  title: "Bizezz",
  description: "let's make your journy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={rajdhani.variable}
      >
         <ClerkProvider>
          <CartProvider>
          <Header/>
          {children}
          <Toaster/>
          <Footer />
        </CartProvider>
      </ClerkProvider>
      </body>
    </html>
  );
}
