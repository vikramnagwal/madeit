import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Provider } from "react-wrap-balancer";
import Head from "next/head";
import Script from "next/script";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "madeit",
	description: "Generated fake income shots",
	icons: {
		icon: "/icon.png",
	}
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
    <html lang="en">
      <Head>
        <title>Generate fake mrr shots</title>
        <meta
          name="description"
          content="create fake mrr screenshots and share with your friends"
        />
        <meta
          name="keywords"
          content="fake mrr, monthly recurring revenue, prank, fake screenshot"
        />
        <meta name="author" content="Vikram Nagwal" />
        <meta property="og:title" content="Madeit" />
        <meta
          property="og:description"
          content="Generate fake monthly recurring revenue screenshots."
        />
        <meta property="og:image" content="/madeit.png" />
        <meta property="og:url" content="https://madeit.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Madeit" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@madeit" />
        <meta name="twitter:creator" content="@madeit" />
        <meta name="twitter:title" content="Madeit" />
        <meta
          name="twitter:description"
          content="Generate fake monthly recurring revenue screenshots."
        />
        <meta name="twitter:image" content="/madeit.png" />
        <meta name="twitter:image:alt" content="Madeit" />
        <meta name="twitter:url" content="https://madeit.vercel.app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/madeit.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href="https://madeit.vercel.app" />

      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
<Script strategy="lazyOnload" async src="https://www.googletagmanager.com/gtag/js?id=G-NMTT4BQ1EF"></Script>
<Script id="google-analytics-2" strategy="lazyOnload">{`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-NMTT4BQ1EF');
  `}
</Script>
        <Provider>{children}</Provider>
        <Analytics />
      </body>
    </html>
  );
}
