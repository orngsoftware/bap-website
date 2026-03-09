import { Raleway } from 'next/font/google'
import '@/app/globals.css'
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import Navbar from '@/components/Navbar';

const raleway = Raleway({
  subsets: ["latin", "cyrillic"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale()
  const messages = await getMessages()

  return (
    <html lang={locale}>
    <body className={raleway.className}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
        </NextIntlClientProvider>
    </body>
    </html>
  );
}
