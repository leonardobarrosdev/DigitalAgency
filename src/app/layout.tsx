import type { Metadata } from "next";
import Head from "next/head";
import "public/assets/favicon.ico"
import "fontawesome"
import { Montserrat, Roboto, Roboto_Slab } from "next/font/google";
import "public/assets/css/styles.css";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["400", "100", "300", "700"],
  subsets: ["latin"],
});

const slab = Roboto_Slab({
  weight: ["400", "100", "300", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Digital Agency",
  description: "Your digital agency have Products and Services.",
};

export async function generateStaticParams() {
  return [{ lang: 'en-US' }, { lang: 'es' }, { lang: 'pt-br' }];
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: { lang: 'en-US' | 'es' | 'pt-br' }}>) {
  return (
    <html lang={params.lang}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
        <title>Agency - Digital Store</title>
      </Head>
      <body className={`${montserrat} ${roboto} ${slab}`}>
        {children}
      </body>
    </html>
  );
}
