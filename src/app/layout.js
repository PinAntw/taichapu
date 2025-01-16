import { Geist, Geist_Mono } from "next/font/google";
import { Noto_Serif_TC } from "next/font/google";

import "./globals.css";
import FooterCus from './components/FooterCus'
import HeaderCus from './components/HeaderCus'


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const notoSerifTC = Noto_Serif_TC({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});


export const metadata = {
  title: "台茶舖-最懂你的雜貨舖",
  description: "台茶舖-最懂你的雜貨舖",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-TW">
      {/* <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > */}
      <body className={notoSerifTC.className}>
        <HeaderCus/>
        {children}
        <FooterCus/>
      </body>
    </html>
  );
}
