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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
