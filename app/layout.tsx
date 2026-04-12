import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import Script from "next/script"; // ✅ tambahin ini

export const metadata: Metadata = {
  title: "TBdelapanShop Landing",
  description: "TBdelapanShop Landing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      
      {/* ✅ TAMBAHIN DI SINI */}
      <head>
        <Script
          strategy="afterInteractive"
          src="https://connect.facebook.net/en_US/fbevents.js"
        />
        <Script id="fb-pixel">
          {`
            window.fbq = window.fbq || function(){fbq.callMethod?
            fbq.callMethod.apply(fbq, arguments):fbq.queue.push(arguments)};
            if(!window._fbq) window._fbq = window.fbq;
            fbq.push = fbq;
            fbq.loaded = true;
            fbq.version = '2.0';
            fbq.queue = [];

            fbq('init', '1444816726741400');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>

      <body className="bg-white text-slate-900">
        <Header />
        {children}
      </body>
    </html>
  );
}