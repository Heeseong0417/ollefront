"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@/components/navigation/Header";
const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] })

import Login from "@/app/sitein/page"
import { useState } from "react";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [Users, setUsers] = useState(true)
  return (
    <html lang="en" className={`${inter.className}`}>
      
      <body className={`mainview ${inter.className}`}>

    
      <Header/>
      {children}
      
      
      </body>
    </html>
  );
}
