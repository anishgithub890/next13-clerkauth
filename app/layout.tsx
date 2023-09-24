import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import ClientOnly from '@/components/client-only';

const inter = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ANISH || PORTFOLIO',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {/* <ClientOnly>
          </ClientOnly> */}
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
