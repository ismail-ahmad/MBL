import type { Metadata } from "next";
import "./globals.css";
import {League_Spartan, Source_Sans_3} from 'next/font/google';

const LeagueSpartan = League_Spartan({
  subsets: ['latin'],
  variable: '--font-league-spartan',
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap'
});

const SourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans-3',
  weight: ['200', '300','400', '500', '600', '700', '800', '900'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: "Title",
  description: "Description",
};

export default function RootLayout({
  children
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${SourceSans3.variable} ${LeagueSpartan.variable}`}>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5VW4R573');
            `,
          }}
        />
        {/* End Google Tag Manager */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <script dangerouslySetInnerHTML={{
          __html:`
          <!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5VW4R573"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->`
        }} />
        {children}
      </body>
    </html>
  );
}
