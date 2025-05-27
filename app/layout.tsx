"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./globals_sitein_up.css";
import "./globals_grid.css";
import"./globals_searchform.css"
import"./globals_metaverse.css"
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer"
const inter = Inter({ subsets: ['latin'], weight: ['100','200','300','400','500','600', '700'] })
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { CookiesProvider } from "react-cookie";
import { getCookie } from "@/config/cookie/cookie";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [Users, setUsers] = useState(false)
  const [menu_toggle, setmenu_toggle] = useState(false)
  const [state, setstate] = useState(false);
  const setcookies=(tf: boolean)=>{
setstate(()=>tf)
  }

  return (
    <CookiesProvider>       
      <html lang="en">
    
      <body style={{width:"100%",height:"100%"}}  className={`${inter.className}`}>
       
   <Header/>

         <main style={{minHeight:"100vh"}}>{children}</main>
   <Footer/>

      </body>
    </html>
    </CookiesProvider>
  );
}
