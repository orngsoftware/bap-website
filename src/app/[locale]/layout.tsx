import { Raleway } from 'next/font/google'
import '@/app/globals.css'
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const raleway = Raleway({
  subsets: ["latin", "cyrillic"],
  variable: "--font-raleway"
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale()
  const messages = await getMessages()

  return (
    <html lang={locale} className={raleway.variable}>
    <body className={raleway.className}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
    </body>
    </html>
  );
}
