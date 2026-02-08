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
  title: "South Bay Legal Services | Manhattan Beach Law",
  description: "Get expert legal support in the South Bay. We offer high-quality service for valued clients. Contact us for a consultation.",
};

export default function RootLayout({
  children
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${SourceSans3.variable} ${LeagueSpartan.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{
            __html: `
              <!-- Google tag (gtag.js) -->
              <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16926495651"></script>
              <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'AW-16926495651');
              </script>
            `,
          }} />
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
