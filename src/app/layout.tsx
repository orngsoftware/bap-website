import { Raleway } from 'next/font/google'
import Image from 'next/image';
import Link from 'next/link';
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin", "cyrillic"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <div className='nav-wrapper'>
          <Image 
            src='/logo.png' 
            alt="BAP Logo"
            width={72}
            height={72}
          />
          <div className='nav-bar'>
            <Link href="/">Home</Link>
            <Link href="/">Association</Link>
            <Link href="/">Membership</Link>
            <Link href="/">Events</Link>
            <Link href="/">Library</Link>
            <Link href="/">Partners</Link>
            <Link href="/">Contact</Link>
          </div>
          <div className='lingo-choice'>

          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
